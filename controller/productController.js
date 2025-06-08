const { products } = require("../dataBase/connection")

//get,patch,post,delete,

const fetchProduct =async (req,res)=>{
    const datas=await products.findAll()
    res.json({
        massage:"Product Fetched Successfully!!",
        datas
    })
}

const createProduct =async (req,res)=>{
    try{const{productName,productPrice,productType,productImage,productWeight,productDiscount}=req.body
    await products.create({
        productName,
        productPrice,
        productType,
        productImage,
        productWeight,
        productDiscount
    })
    res.json({
        massage:"Product Created Sucessfully!!"
    })
}catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
}
}

const editProduct = async (req,res)=>{
    try{
    const id = req.params.id
    const{productName,productPrice,productType,productImage,productWeight,productDiscount}=req.body
    await products.update({
        productName,
        productPrice,
        productType,
        productImage,
        productWeight,
        productDiscount
    },{
        where:{
            id
        }
    })
    res.json({
        massage:"Product Edited SucessFully!!"
    })
    }catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
}
}

const deleteProduct = async (req,res)=>{
    const id = req.params.id
    await products.destroy({
        where:{
            id
        }
    })
    res.json({
        massage:"Product Deleted Sucessfully!!"
    })

}

const fetchSingleProduct = async (req,res)=>{
    const id=req.params.id
    const datas =await products.findByPk(id)
    res.json({
        massage:"Single Product Fetched Successfully!!",
        datas
    })
}

module.exports={fetchProduct,createProduct,editProduct,deleteProduct,fetchSingleProduct}

