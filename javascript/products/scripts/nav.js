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