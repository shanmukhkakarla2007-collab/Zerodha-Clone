require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ATLAS_URL = process.env.ATLAS_URL;
const { holdings: holdingsmodel } = require('./models/holdings');
const { positions: positionsmodel } = require('./models/positions');
const { users: usersmodel } = require('./models/users');
const { orders: ordersmodel } = require('./models/orders');
const data = require('./data');
const cors = require("cors");
const bcrypt = require('bcrypt');
const { token } = require('./token');
const cookieParser = require("cookie-parser");
const { logincheck, signupvalidation, loginvalidation, buyvalidation, sellvalidation } = require('./middlewares');
const wrapAsync = require('./utils/wrapAsync');
const ExpressError = require("./utils/expressError");
const PORT = process.env.PORT || 8000;


app.use(express.json());
const allowedOrigins = [
    "https://zerodha-clone-frontend-oqzt.onrender.com",
    "https://zerodha-clone-dashboard-2wcj.onrender.com"
];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));
app.use(cookieParser());


async function main() {
    await mongoose.connect(ATLAS_URL);
}

main()
    .then((res) => {
        console.log("connection is successfull");
    })
    .catch((err) => {
        console.log(err);
    })


app.get("/", (req, res) => {
    res.send("working");
});
app.get("/resetholdings", async (req, res) => {
    await holdingsmodel.deleteMany({});
    await holdingsmodel.insertMany(
        data.holdings.map((holding) => ({
            name: holding.name,
            qty: holding.qty,
            avg: holding.avg,
            price: holding.price,
            net: holding.net,
            day: holding.day,
            isLoss: holding.isLoss
        }))
    );
    res.send("reseted all holdings");
});
app.get("/resetpositions", async (req, res) => {
    await positionsmodel.deleteMany({});
    await positionsmodel.insertMany(
        data.positions.map((position) => ({
            product: position.product,
            name: position.name,
            qty: position.qty,
            avg: position.avg,
            price: position.price,
            net: position.net,
            day: position.day,
            isLoss: position.isLoss,
        }))
    );
    res.send("reseted all positions");
});
app.get("/holdings", logincheck, wrapAsync(async (req, res, next) => {
    const allholdings = await holdingsmodel.find({ owner: req.user.userId });
    res.json(allholdings);
}));
app.get("/positions", logincheck, wrapAsync(async (req, res, next) => {
    const allpositions = await positionsmodel.find({ owner: req.user.userId });
    res.json(allpositions);
}));
app.post("/order/buy", logincheck, buyvalidation, wrapAsync(async (req, res, next) => {
    const { neworder } = req.body;
    const order = new ordersmodel({ ...neworder, owner: req.user.userId });
    const amount = Number(neworder.qty) * Number(neworder.price);
    const user = await usersmodel.findOne({ _id: req.user.userId });
    //buyvalidations
    if (amount > user.funds) {
        order.status = "REJECTED";
        await order.save();
        return res.status(201).json({
            message: "REJECTED",
            order: order
        });
    }
    else {
        order.status = "COMPLETED"
        user.funds = user.funds - amount;
        await user.save();
        const oldholding = await holdingsmodel.findOne({ name: neworder.name, owner: req.user.userId });
        if (oldholding) {
            const oldQty = oldholding.qty;
            const oldAvg = oldholding.avg;
            const newQty = oldQty + Number(neworder.qty);
            const newAvg =
                ((oldQty * oldAvg) +
                    (neworder.qty * Number(neworder.price))) / newQty;
            oldholding.qty = newQty;
            oldholding.avg = newAvg;
            await oldholding.save();
            await order.save();
            return res.status(201).json({
                message: "COMPLETED",
                order: order,
                holding: oldholding,
                holdingtype: "OLD",
                user: {
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    openingBalance: user.openingBalance,
                    funds: user.funds,
                }
            });
        }
        else {
            const newholding = new holdingsmodel({
                name: neworder.name,
                qty: neworder.qty,
                avg: neworder.price,
                owner: req.user.userId
            });
            await newholding.save();
            await order.save();
            return res.status(201).json({
                message: "COMPLETED",
                order: order,
                holding: newholding,
                holdingtype: "NEW",
                user: {
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    openingBalance: user.openingBalance,
                    funds: user.funds,
                }
            });
        }
    }
}));
app.post("/order/sell", logincheck, sellvalidation, wrapAsync(async (req, res, next) => {
    let { neworder } = req.body;
    const order = new ordersmodel({ ...neworder, owner: req.user.userId });
    const user = await usersmodel.findOne({ _id: req.user.userId });
    const oldholding = await holdingsmodel.findOne({ name: neworder.name, owner: req.user.userId });
    if (oldholding) {
        if (oldholding.qty >= Number(neworder.qty)) {
            order.status = "COMPLETED";
            const amount = neworder.qty * neworder.price;
            user.funds += amount;
            user.save();
            await order.save();
            oldholding.qty = oldholding.qty - Number(neworder.qty);
            if (oldholding.qty == 0) {
                await holdingsmodel.deleteOne({ _id: oldholding._id });
                return res.status(201).json({
                    message: "COMPLETED",
                    order: order,
                    holding: oldholding,
                    change: "DELETED",
                    user: {
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        openingBalance: user.openingBalance,
                        funds: user.funds,
                    }
                });
            }
            else {
                await oldholding.save();
                return res.status(201).json({
                    message: "COMPLETED",
                    order: order,
                    holding: oldholding,
                    change: "UPDATED",
                    user: {
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        openingBalance: user.openingBalance,
                        funds: user.funds,
                    }
                });
            }
        }
        else {
            order.status = "REJECTED";
            await order.save();
            return res.status(201).json({
                message: "REJECTED",
                order: order,
                message2: "ORDER WAS REJECTED BECAUSE OF INSUFFICENT HOLDING QUANTITY"
            });
        }
    }
    else {
        order.status = "REJECTED";
        await order.save();
        return res.status(201).json({
            message: "REJECTED",
            order: order,
            message2: "ORDER WAS REJECTED BECAUSE YOU SHOULD OWN A STOCK TO SELL IT"
        });
    }

}));
app.get("/order", logincheck, wrapAsync(async (req, res, next) => {
    const orders = await ordersmodel.find({ owner: req.user.userId });
    res.json(orders);
}));
app.post("/signup", signupvalidation, wrapAsync(async (req, res, next) => {
    const { username, password, email } = req.body;
    const usercheck = await usersmodel.findOne({ $or: [{ username: username }, { email: email }] });
    if (usercheck) {
        return next(new ExpressError(401, "USERNAME IS ALREADY AVAILABLE"));
    }
    else {
        const user = new usersmodel({
            username: username,
            email: email
        })
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.cookie("token", token(user._id, user.username, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }));
        return res.json({
            message: "SIGNUP SUCCESSFULL",
        })
    }
}));
app.post("/login", loginvalidation, wrapAsync(async (req, res, next) => {
    const { username, password } = req.body;
    const usercheck = await usersmodel.findOne({ username: username });
    if (usercheck) {
        const passwordcheck = await bcrypt.compare(password, usercheck.password);
        if (passwordcheck) {
            res.cookie("token", token(usercheck._id, usercheck.username, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }));
            return res.json({
                message: "LOGIN SUCCESSFULL"
            })
        }
        else {
            return next(new ExpressError(401, "INVALID USERNAME OR PASSWORD"));
        }
    }
    else {
        return next(new ExpressError(401, "YOU SHOULD SIGNUP FIRST"));
    }
}));
app.get("/logout", wrapAsync(async (req, res, next) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });
    res.json({
        message: "LOGOUT SUCCESSFULL"
    })
}));
app.get("/account", logincheck, wrapAsync(async (req, res, next) => {

    console.log("ACCOUNT REQUEST");
    console.log("USER:", req.user);

    const user = await usersmodel.findById(req.user.userId);

    console.log("DATABASE USER:", user);

    res.json({
        username: user.username,
        email: user.email,
        openingBalance: user.openingBalance,
        funds: user.funds,
    });
}));


app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).json({
        success: false,
        message: message
    });
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});