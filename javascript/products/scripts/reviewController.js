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