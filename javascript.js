
const hamburger = document.querySelector('.hamburger');
//console.log(hamburger); // to see what is in the variable: hamburger
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);
hamburger.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click',closeMenu));
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
/** Added event listener  to make an hover effect on meni items for mobiles  and tablets */
document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('nav-link')) {
        event.target.classList.add('hover');
    }
});

document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('nav-link')) {
        event.target.classList.remove('hover');
    }
});






// Get the modal
var modal = document.getElementById("contactFormDialog");

// Get the button that opens the modal
var btn = document.getElementById("openDialog");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Submit form action (in this example, just prevent the default behavior)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your form submission logic here
});
