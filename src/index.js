const express = require("express");
const connect = require("./config/db");
const cors = require("cors")
const productController = require("./controllers/product.controller")

const app = express();

app.use(express.json());

app.use(cors())

app.use("/product",productController)
app.get("/product",productController);

app.listen(7771,async()=>{
    try{
        await connect();
        console.log("Listening on port 7771");
    }
    catch(err){
        console.log({message:err.message});
    }
})