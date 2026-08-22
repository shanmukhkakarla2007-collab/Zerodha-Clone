const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"]
    },
    openingBalance: {
        type: Number,
        default: 10000,
        min: [0, "Opening balance cannot be negative"]
    },
    funds: {
        type: Number,
        default: 10000,
        min: [0, "Funds cannot be negative"]
    }
});

const users = mongoose.model("user", userschema);

module.exports = { users };