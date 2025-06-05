// const btn = document.getElementById('menu-btn');
// const nav = document.getElementById('n-menu');

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// });

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