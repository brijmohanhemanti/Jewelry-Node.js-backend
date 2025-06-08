const express = require("express")
const cors= require("cors")

const app = express()

app.use(cors({
    origin:"*"
}))

const productRouter=require("./router/productRouter")

app.use(express.json())

app.use("/manohar",productRouter)

app.listen(8900,()=>{
    console.log("The Port is connected!!")
})