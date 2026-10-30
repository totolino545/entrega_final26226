import * as productsModel from "../models/productsModel.js";

export const getAllProducts = (req, res) => {
    const products = productsModel.findAllProducts();
    return res.json(products);
};