
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


document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr
    flatpickr("#date", {
        enableTime: true, // Disable time picker
        dateFormat: "Y-m-d", // Date format
        minDate: "today",// Minimum selectable date is today
        disableMobile: false,
        onChange: function(selectedDates, dateStr, instance) {
            // Change label to "Selected Date" when a date is picked
            document.getElementById('date-label').textContent = 'Selected Date';
            // Hide the calendar icon
            document.querySelector('.calendar-icon').style.display = 'none';
        }
    });
        
        

    // Get the modal
    let modal = document.getElementById("contactFormDialog");

    // Get the button that opens the modal
    let btn = document.getElementById("openDialog");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

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
        // Here you can add logic to send the form data to your server
        // After successful submission, display a thank you message
        showModal("You have sucessfully booked demo.<br> Our expert will contact you within 1 business day.");
    });

    // Function to display a modal with a message
    function showModal(message) {
        var modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '<span class="close">&times;</span><h4>' + message + '</h4>';
        modal.style.display = "block";
        // Close the modal when the user clicks on <span> (x)
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
        // Close the modal when the user clicks anywhere outside of the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

     // Dodajemy obsługę kliknięcia na ikonę
  document.querySelector('.calendar-icon').addEventListener('click', function() {
    document.getElementById('date').focus(); // Po kliknięciu przenosi fokus do pola daty, co uruchamia kalendarz
});
});



 











