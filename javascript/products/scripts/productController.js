
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