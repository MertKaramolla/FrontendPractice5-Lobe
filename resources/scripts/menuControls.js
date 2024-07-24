/* Ma Variables */

const hamburger = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-nav-container");
const hamburgerIconLines = document.querySelectorAll(".hamburger-icon-lines");
const openVideoButt = document.getElementById("youtube-frame-open-button");
const youtubeFrame = document.getElementById("youtube-frame");
const closeVideoButt = document.getElementById("youtube-frame-close-button");
const iFrame = document.getElementById("embedded-video")


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

function openModal() {
    youtubeFrame.style.display = "block";
    iFrame.src = "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1";
};

function closeModal() {
    youtubeFrame.style.display = "none";
    iFrame.src = "";
};

function closeModalOnResize() {
    if(window.innerWidth > 650 && mobileMenu.classList.contains('open')) {
        console.log("mobile menu is open during resize");
        mobileMenu.classList.remove('open');
        hamburgerIconLines.forEach(line => {
            line.classList.remove('open');
        });
        console.log("mobile menu is now closed")
    }
}

openVideoButt.addEventListener('click', openModal);
closeVideoButt.addEventListener('click', closeModal);
youtubeFrame.addEventListener('click', event => {
    if (event.target !== iFrame) {
        closeModal();
    }
});

window.addEventListener('resize', closeModalOnResize);