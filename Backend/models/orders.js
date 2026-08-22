const mongoose = require('mongoose');
const schema = mongoose.Schema;


const ordersschema = new schema({
   name: {
      type: String,
      required: true
   },
   qty: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"]
   },
   price: {
      type: Number,
      required: true,
      min: [0.01, "Price must be greater than 0"]
   },
   mode: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true
   },
   status: {
      type: String,
      enum: ["COMPLETED", "REJECTED"],
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now,
      required: true
   },
   owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
   }
});

const orders = mongoose.model("order", ordersschema);

module.exports = { orders };