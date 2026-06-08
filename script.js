function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}