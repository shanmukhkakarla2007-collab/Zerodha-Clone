require('dotenv').config();
const {signupSchema,loginSchema,buySchema,sellSchema}=require("./joivalidations");
const ExpressError=require("./utils/expressError");
const jwt = require("jsonwebtoken");
function logincheck(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return next(new ExpressError(401,"you should login first"));
    }
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (err) {
        return next(new ExpressError(401,"Invalid or expired token"));
    }
}
function signupvalidation(req, res, next) {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return next(new ExpressError(400,error.details[0].message));
    }
    next();
}
function loginvalidation(req, res, next) {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return next(new ExpressError(400,error.details[0].message));
    }
    next();
}
function buyvalidation(req,res,next){
    const {error}=buySchema.validate(req.body);
    if (error) {
        return next(new ExpressError(400,error.details[0].message));
    }
    next();
}
function sellvalidation(req,res,next){
    const {error}=sellSchema.validate(req.body);
    if (error) {
        return next(new ExpressError(400,error.details[0].message));
    }
    next();
}

module.exports={logincheck,signupvalidation,loginvalidation,buyvalidation,sellvalidation};