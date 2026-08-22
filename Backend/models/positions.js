const mongoose = require('mongoose');
const schema = mongoose.Schema;


const positionsschema = new schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
    
})

const positions = mongoose.model("position", positionsschema);

module.exports = { positions };

