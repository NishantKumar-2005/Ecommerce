const { json } = require("express");
const product=require("E:/college MSIT/Ecommerce/Backend/Models/ProductModel.js");
const ErrorHandler = require("../../utils/ErrorHandeler");

//create product

exports.createProduct=async(req,res,next)=>{
    const Product=await product.create(req.body);
    res.status(201).json({
        success:true,
        message:"Product is created"
    })
}

//GET all product

exports.getAllproducts=async(req,res)=>{

    const products=await product.find();

    if(!product){
        res.status(500).json({
            success:false,
            message:"No product are register",
        })
    }

    res.status(200).json({
        success:true,
        products,
    })

}

// Update Product Admin

exports.updateProducts=async(req,res)=>{
    let Product=product.findById(req.params.id);

    if(!Product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    Product=await product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
         runValidators:true,
         useFindAndModify:false});
    res.status(200).json({
        success:true,
        Product,
    })
}

//Delet Product Admin

exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found"
        });
      }
  
      await product.deleteOne();
      res.status(200).json({
        success: true,
        message: "Product deleted successfully"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while deleting the product"
      });
    }
  };

  // get product details 

  exports.productDetails=async(req,res,next)=>{
    const Product=await product.findById(req.params.id);
    if (!Product) {
        return next(new ErrorHandler("Product not found",404));
      }

    res.status(200).json({
        success:true,
        Product,
    })
  }