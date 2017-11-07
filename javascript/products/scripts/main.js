const update = require("./nav")
const productData = require("./productFactory")
const printProduct = require("./productController")
update()
ProductsPage = {}
ProductsPage.db = printProduct(productData)
printProduct(ProductsPage.db)