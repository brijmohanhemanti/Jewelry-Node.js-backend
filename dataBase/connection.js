const {Sequelize,DataTypes} = require("sequelize")

const sequelize=new Sequelize("postgresql://postgres.wyqrygicdavaqnqejfnq:Brij@1055@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("DataBase Is connected!!")
})
.catch((err)=>{
    console.log("error"+err)
})

const db ={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.products=require("./model/productModel")(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
    console.log("Migrated Succenssfully!!")
})

module.exports=db