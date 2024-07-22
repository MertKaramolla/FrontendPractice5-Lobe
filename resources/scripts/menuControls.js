const hamburger = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-nav-container");
const hamburgerIconLines = document.querySelectorAll(".hamburger-icon-lines");

function toggleMobileMenu() {
    if (!mobileMenu.classList.contains('open')) {
        console.log("mobile menu is not open");
        mobileMenu.classList.add('open');
        hamburgerIconLines.forEach(line => {
            line.classList.add('open');
        });
        console.log("mobile menu is now open")
    };
};

hamburger.addEventListener('click', toggleMobileMenu);