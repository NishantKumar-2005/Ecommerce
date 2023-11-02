const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    discription:{
        type:String,
        require:[true,"Please Enter product Descriptions"]
    },
    price:{
        type:Number,
        require:[true,"Please Enter Price of Product "],
        maxLength:[8,"Price can't be greater than 8 figures"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:String,            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    category:{
        type:String,
        required:[true,"Please enter category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please enter Number of stocks"],
        maxLength:[4,"Stock cannot be greater than 4 figures"],
        default:1
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true
        },
        Comment:{
            type:String,
            required:true,
        }
        
    }],
    CreatedAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("product",productSchema);