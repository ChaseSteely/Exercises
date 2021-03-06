(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const update = require("./nav")
const productData = require("./productFactory")
const printProduct = require("./productController")
const printReview = require("./reviewController")
const reviewData = require("./reviewFactory")
update()
printProduct(productData)
printReview(reviewData)
},{"./nav":2,"./productController":3,"./productFactory":4,"./reviewController":5,"./reviewFactory":6}],2:[function(require,module,exports){
const navEl = document.getElementById("nav")

const populateNav = () => {
    navEl.innerHTML = `
    <section class="navBar">
        <ul class="navList">
        <li class="name">Betsy</li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Logout</a></li>
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



},{}],5:[function(require,module,exports){
const reviewEl = document.getElementById("placeReview");

const reviewPlace = (db) => {
    db.forEach(r => {
    reviewEl.innerHTML += `
    <article class="reviewItem">
            <h2>${r.name}</h2>
            <h4>Product Purchased: ${r.product}</h4>
            <p>Review: ${r.review}</p>
    </article>
    `
})
}

module.exports = reviewPlace
},{}],6:[function(require,module,exports){
const reviews = [
    {
        "name": "Random Internet Shopper",
        "product": "Hipster Candle",
        "review": "Farm-to-table small batch ennui blue bottle health goth chicharrones, sustainable humblebrag hashtag quinoa glossier mumblecore cred adaptogen beard. Williamsburg leggings narwhal cred edison bulb mlkshk man braid freegan microdosing try-hard master cleanse cloud bread subway tile pok pok disrupt. Vice tousled sartorial stumptown marfa. Quinoa gastropub twee tofu lo-fi bicycle rights cardigan pabst polaroid readymade man bun cred taiyaki waistcoat woke. Brunch forage tofu, tbh typewriter small batch hexagon pop-up try-hard green juice palo santo chicharrones glossier beard venmo. Vexillologist fashion axe +1, af chambray synth coloring book semiotics umami pop-up. VHS pok pok vexillologist keffiyeh, locavore blog direct trade selfies taiyaki forage master cleanse intelligentsia chambray tofu. Heirloom raw denim actually street art artisan post-ironic green juice edison bulb mumblecore kale chips messenger bag bitters. Quinoa etsy twee cornhole copper mug tousled mlkshk 90's hammock leggings bespoke succulents retro."
    },
    {
        "name": "Guy that is way into this product",
        "product": "Hipster Kit",
        "review": "Tousled man bun flexitarian wayfarers, woke taiyaki asymmetrical. Vinyl tousled master cleanse food truck asymmetrical hella coloring book, la croix fingerstache activated charcoal gluten-free cold-pressed taiyaki. Meditation cornhole tumblr plaid health goth scenester yr. Post-ironic 8-bit slow-carb, tumblr shabby chic activated charcoal chia four loko. Ennui kombucha wayfarers portland migas flannel 90's jianbing bicycle rights taxidermy pok pok. Banjo typewriter man bun chartreuse cray squid kale chips raw denim post-ironic jean shorts craft beer organic trust fund vaporware. Skateboard art party health goth raw denim iPhone. Messenger bag try-hard YOLO pabst edison bulb kogi. Waistcoat pug blog, pork belly organic knausgaard synth cray food truck hammock four loko small batch banh mi. Kombucha semiotics four dollar toast neutra put a bird on it forage lo-fi flexitarian meggings meh farm-to-table mlkshk hella. Palo santo shoreditch gentrify affogato hexagon."
    },
    {
        "name": "Guy who just spent his last $25 on a candle instead of gas",
        "product": "Hipster Candle",
        "review": "Ugh meggings gentrify cloud bread salvia. Single-origin coffee poutine etsy butcher organic. Lo-fi blue bottle tilde VHS iPhone stumptown mixtape salvia polaroid. Farm-to-table coloring book meditation meggings tousled lumbersexual prism sartorial 3 wolf moon. Asymmetrical pinterest crucifix church-key chartreuse freegan woke, ennui sustainable meggings subway tile pitchfork roof party. Mlkshk shabby chic edison bulb forage. Trust fund plaid adaptogen truffaut gochujang. Bitters hashtag irony etsy actually quinoa paleo ennui. Venmo cronut vaporware trust fund master cleanse narwhal 8-bit tote bag vice viral keytar beard marfa shoreditch cornhole. Selvage craft beer lumbersexual ennui cold-pressed."
    }
]

module.exports = reviews
},{}]},{},[1]);
