
const { Product } = require("../models/products");


exports.getAllProduct = async(req, res) => {
    try{
        const products = await Product.findAll();
        res.json(products); 
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}