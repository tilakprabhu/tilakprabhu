$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,  // Enable navigation
        autoplay: true,  // Enable autoplay
        autoplayTimeout: 3000,  // Time between auto slides in milliseconds
        autoplayHoverPause: true,  // Pause autoplay on hover
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // Hide the navigation buttons
    $('.owl-carousel .owl-nav').hide();
});


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }