// const btn = document.getElementById('menu-btn');
// const nav = document.getElementById('n-menu');

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// });

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Optional: Close mobile menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Hide desktop navbar on mobile
    function handleResize() {
        if (window.innerWidth <= 700) {
            if (navbar) navbar.style.display = 'none';
        } else {
            if (navbar) navbar.style.display = 'flex';
            if (mobileMenu) mobileMenu.classList.remove('active');
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementById("myHeader");


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.style.backgroundColor = "#021f2a";
        // header.style.marginTop = "10px";
        header.style.transition = "ease-in 0.2s";

    } else {
        header.classList.remove("sticky");
        header.style.backgroundColor = "transparent";

    }
}