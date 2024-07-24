/* Ma Variables */

const hamburger = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-nav-container");
const hamburgerIconLines = document.querySelectorAll(".hamburger-icon-lines");

/* Mobile Menu Events */

function toggleMobileMenu() {
    if (!mobileMenu.classList.contains('open')) {
        console.log("mobile menu is not open");
        mobileMenu.classList.add('open');
        hamburgerIconLines.forEach(line => {
            line.classList.add('open');
        });
        console.log("mobile menu is now open")
    } else {
        console.log("mobile menu is open");
        mobileMenu.classList.remove('open');
        hamburgerIconLines.forEach(line => {
            line.classList.remove('open');
        });
        console.log("mobile menu is now closed")
    };
};

hamburger.addEventListener('click', toggleMobileMenu);

/* Modal iFrame Events */

