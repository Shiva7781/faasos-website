 const mongoose = require("mongoose");


 const productSchema = mongoose.Schema({
    cat:{type:String,require:false},
    img_url:{type:String,require:true},
    food_name:{type:String,require:true},
    Price:{type:Number,require:true},
    tags:{type:String,require:true}
 },{
     versionKey: false,
     timestamps:true
 });

 module.exports = mongoose.model("product",productSchema);