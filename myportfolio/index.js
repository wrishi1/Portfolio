/*===========================Toggle icon navbar============================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===========================Scroll Section Active Link============================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            });
        };
    });

/*===========================Sticky navbar ============================= */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
/*===========================remove toggle icon & navbar when click navbar link(scroLL)============================= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===========================scroll reveal============================= */
ScrollReveal({
     //reset: true,
     distance:'80px',
     duration: 2750,
     delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', 
        {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-container', {origin: 'right'});

/*===========================typed js============================= */
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer.','Frontend Developer.', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all link icons with class 'bx-link' inside elements with class 'portfolio-box'
    const linkIcons = document.querySelectorAll('.portfolio-box .bx-link');
    
    // Loop through each link icon
    linkIcons.forEach(function(linkIcon) {
        // Add click event listener to the current link icon
        linkIcon.addEventListener('click', function() {
            // Show an alert when the link icon is clicked
            alert('Our team working on it, Thank you for your patience!');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Show an alert
        alert("Your message has been sent Succesfully!");
    });
});



// Function to update the clock
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format hours, minutes, and seconds to ensure they have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the clock in the navbar
    var clock = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = clock;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);