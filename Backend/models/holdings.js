const mongoose =require('mongoose');
const schema=mongoose.Schema;


const holdingsschema=new schema({
    name: {
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true,
        min: [1, "Quantity must be at least 1"]
    },
    avg: {
        type:Number,
        required:true,
        min:[0.01, "Average price must be greater than 0"]
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    }
})

const holdings=mongoose.model("holding",holdingsschema);

module.exports={holdings};