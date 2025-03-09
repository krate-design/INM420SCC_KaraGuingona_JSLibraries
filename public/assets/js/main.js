// FullPage.JS 
document.addEventListener("DOMContentLoaded", function () {
  var myFullpage = new fullpage('#fullpage', {
    slidesNavigation: true,
    slidesNavPosition: 'bottom', 
    css3:false,
  });
});

// Detect Scroll for NavBG
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Anime.JS for Wanderlog Logo Header
document.addEventListener("DOMContentLoaded", function() {
  function animateSVG() {
    anime({
      targets: 'svg',
      translateY: [
        -100, 0,
        { value: 5, duration: 50, easing: 'easeOutExpo' },
        { value: -5, duration: 50, easing: 'easeOutExpo' },
        { value: 3, duration: 50, easing: 'easeOutExpo' },
        { value: -3, duration: 50, easing: 'easeOutExpo' },
        { value: 0, duration: 50, easing: 'easeOutExpo' }
      ],
      opacity: [
        0, 1,
        { value: 0.8, duration: 50 },
        { value: 1, duration: 50 },
        1
      ],
      duration: 1500,
      easing: 'easeOutExpo',
      complete: function() {
        setTimeout(function() {
          anime({
            targets: 'svg',
            translateY: [0, 100],
            opacity: [1, 0],
            duration: 800,
            easing: 'easeInExpo',
            complete: function() {
              animateSVG();
            }
          });
        }, 1000);
      }
    });
  }

  animateSVG();
});

// GRANIM.JS for Contact Us Background
var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'diagonal',
  isPausedWhenNotInView: false,
  states : {
    "default-state": {
      gradients: [
        ['#ff0000', '#0000ff'],
        ['#00ff00', '#ff00ff'],
        ['#ffff00', '#00ffff']
      ],
      transitionSpeed: 5000,
      loop: true
    }
  }
});

// Ensures the canvas covers the background of the section
document.querySelector('#canvas-basic').style.position = 'absolute';
document.querySelector('#canvas-basic').style.top = '0';
document.querySelector('#canvas-basic').style.left = '0';
document.querySelector('#canvas-basic').style.width = '100%';
document.querySelector('#canvas-basic').style.height = '100%';

// Set the section to have relative positioning to allow canvas positioning
document.querySelector('#section2').style.position = 'relative';



// jQuery Form Validation 
$(document).ready(function () {
  // Form validation
  $('.wanderlog-form').submit(function (e) {
    e.preventDefault(); // Prevent the form from submitting until we validate

    var isValid = true;

    // Name validation
    var name = $('#name');
    if (name.val().trim() === '') {
      name.addClass('is-invalid'); // Add invalid class
      isValid = false;
    } else {
      name.removeClass('is-invalid'); // Remove invalid class if input is valid
    }

    // Email validation
    var email = $('#email');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.val().trim() === '') {
      email.addClass('is-invalid');
      isValid = false;
    } else if (!emailPattern.test(email.val().trim())) {
      email.addClass('is-invalid');
      isValid = false;
    } else {
      email.removeClass('is-invalid');
    }

    // Message validation
    var message = $('#message');
    if (message.val().trim() === '') {
      message.addClass('is-invalid');
      isValid = false;
    } else {
      message.removeClass('is-invalid');
    }

    // If the form is valid, show the alert popup
    if (isValid) {
      alert('Form has been submitted successfully!');
      this.submit(); // Submit the form if valid, you can also handle via AJAX if needed
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
});
