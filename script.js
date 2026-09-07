// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 8, 22, 0.96)";

    } else {

        navbar.style.background =
            "rgba(5, 8, 22, 0.85)";

    }

});


// ================================
// SIMPLE PAGE LOADED MESSAGE
// ================================

console.log("Welcome to Pavan Kumar's Portfolio!");