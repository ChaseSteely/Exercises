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