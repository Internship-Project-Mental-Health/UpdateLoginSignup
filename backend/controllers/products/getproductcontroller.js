const mongoose = require("mongoose");
const ProductCollection = require("../../models/Products/ProductSchema");
const getproductcontroller = async (req, res) => {
    const { id } = req.params;
    let products;
    try {
        if (id) {
            products = await ProductCollection.find({
                product_id: id,
            });
        }
        else {
            products = await ProductCollection.find()
            console.log("Product Fetched Successfully");
        }
    } catch (error) {
        res.status(504).send({
            message: "Error fetching products",
        });
        console.log(`Error Occured : ${error}`)
    }
    res.status(200).send(products)
};

module.exports = getproductcontroller;