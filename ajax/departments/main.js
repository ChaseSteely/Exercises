$(document).ready(function () {

    const outputEl = $("#output")

    $.ajax({
        "url": "https://chasesteelysite.firebaseio.com/products.json",
        "method": "GET"
    }).then(theproducts => {
        $.ajax({
            "url": "https://chasesteelysite.firebaseio.com/categories.json",
            "method": "GET"
        }).then(theCategories => {
            let finalHTML = ""
            theproducts.forEach( product => {
                const productCat = theCategories.find(c => c.id === product.category_id)
                finalHTML += `
                <section id="${product.id}">
                <h1>${product.name}</h1>
                <h4>${productCat.name}</h4>
                <h4>$${product.price}</h4>
                </section>
                `
            });
            outputEl.html(finalHTML)
        })
    }
        )

});