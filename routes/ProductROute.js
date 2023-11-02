const express=require("express");
const { getAllproducts, createProduct, updateProducts, deleteProduct, productDetails } = require("../controller/productController.js/ProductCOntroller");

const router=express.Router();

router.route("/products").get(getAllproducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProducts);

router.route("/product/delete/:id").delete(deleteProduct);

router.route("/product/details/:id").get(productDetails);


module.exports=router