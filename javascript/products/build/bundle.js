(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const update = require("./nav")
const productData = require("./productFactory")
const printProduct = require("./productController")
update()
ProductsPage = {}
ProductsPage.db = printProduct(productData)
printProduct(ProductsPage.db)
},{"./nav":2,"./productController":3,"./productFactory":4}],2:[function(require,module,exports){
const navEl = document.getElementById("nav")

const populateNav = () => {
    navEl.innerHTML = `
    <section class="navBar">
        <ul class="navList">
        <li class="name">Betsy</li>
            <li><a>Categories</a></li>
            <li><a>Orders</a></li>
            <li><a>Logout</a></li>
        </ul>
        </section>
    `
}
module.exports = populateNav
},{}],3:[function(require,module,exports){

const productEl = document.getElementById("placeProduct");

const productPlace = (db) => {
    db.forEach(p => {
    productEl.innerHTML += `
    <article class="productItem">
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <h4>$${p.price}</h4>
            <h4>Quanity: ${p.quantity}</h4>
            <div class="photo">${p.image}</div>
    </article>
    `
})
}

module.exports = productPlace
},{}],4:[function(require,module,exports){
const products = [
    {
        "title": "Hipster Candle",
        "description": "When you need the smell of hipsters in your home",
        "price": 25,
        "quantity": 100,
        "image": "<img src='../img/candle.jpg'>"
    },
    {
        "title": "Hipster Kit",
        "description": "Keep this on your trunk if need to go full Hipster",
        "price": 100,
        "quantity": 50,
        "image": "<img src='../img/hipsterKit.jpg'>"
    }
]

module.exports = products



},{}]},{},[1]);
