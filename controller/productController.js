
const { Product } = require("../models/product");

//controller untuk mendapat semua produk dari database

exports.getAllProduct = async(req, res) => {
    try{
        const products = await Product.findAll();
        res.json(products); 
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}