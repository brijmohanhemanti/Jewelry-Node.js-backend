const { fetchProduct, createProduct, fetchSingleProduct, editProduct, deleteProduct } = require("../controller/productController")

const router = require("express").Router()

router.route("/jewellry-product").get(fetchProduct).post(createProduct)
router.route("/jewellry-product/:id").get(fetchSingleProduct).patch(editProduct).delete(deleteProduct)

module.exports=router