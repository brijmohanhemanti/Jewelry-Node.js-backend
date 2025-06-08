const productModel = (sequelize,DataTypes)=>{
    const Product =sequelize.define("product",{
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productPrice:{
            type:DataTypes.STRING
        },
        productType:{      //gold & silver 
            type:DataTypes.STRING,
            allowNull:false
        },
        productImage:{
            type:DataTypes.STRING
        },
        productWeight:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productDiscount:{
            type:DataTypes.STRING
        }

    })
    return Product

}

module.exports=productModel