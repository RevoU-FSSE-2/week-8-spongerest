"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
let products = [
    { id: 1, nama: 'Indomie', hpp: 5000, untung: 20, hargaJual: 6250, stok: 10, kategori: 'Makanan' },
    { id: 2, nama: 'Teh Pucuk', hpp: 3000, untung: 20, hargaJual: 3750, stok: 20, kategori: 'Minuman' },
];
router.get('/products', (req, res) => {
    res.json(products);
});
router.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.post('/products', (req, res) => {
    const newProduk = {
        id: products.length + 1,
        nama: req.body.nama,
        hpp: req.body.hpp,
        untung: req.body.untung,
        hargaJual: (req.body.hpp * 100) / (100 - req.body.untung),
        stok: req.body.stok,
        kategori: req.body.kategori,
    };
    products.push(newProduk);
    res.status(201).json(newProduk);
});
router.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const updatedProduct = {
            id,
            nama: req.body.name,
            hpp: req.body.price,
            untung: req.body.untung,
            hargaJual: req.body.hargaJual,
            stok: req.body.stok,
            kategori: req.body.kategori,
        };
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const updatedProduct = Object.assign(Object.assign({}, products[productIndex]), req.body);
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1)[0];
        res.json(deletedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
exports.default = router;
