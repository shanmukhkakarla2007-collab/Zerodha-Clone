const joi = require("joi");

const Joi = require("joi");

module.exports.signupSchema = Joi.object({
    username: Joi.string()
        .trim()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .trim()
        .lowercase()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .max(30)
        .required()
});


module.exports.loginSchema = Joi.object({

    username: Joi.string()
        .trim()
        .required(),

    password: Joi.string()
        .required()

});

module.exports.buySchema = Joi.object({
    neworder: Joi.object({
        name: Joi.string()
            .required(),

        qty: Joi.number()
            .integer()
            .positive()
            .required(),

        price: Joi.number()
            .positive()
            .required(),

        mode: Joi.string()
            .valid("BUY")
            .required()
    }).required()
});

module.exports.sellSchema = Joi.object({
    neworder: Joi.object({
        name: Joi.string()
            .required(),

        qty: Joi.number()
            .integer()
            .positive()
            .required(),

        price: Joi.number()
            .positive()
            .required(),

        mode: Joi.string()
            .valid("SELL")
            .required()
    }).required()
});











