import * as productsModel from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
    const data = await productsModel.findAllProducts();
    return res.json(data.products);
};

export const getProductById = async (req, res) => {
    if (!req.params.id) {
        console.log("Debe proporcionar un ID para seleccionar un producto");
        return;
    }
    const product = await productsModel.findProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    return res.json(product);
};