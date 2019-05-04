/* Seconds */
$('.js--scroll-to-seconds').click(function() { /* Selecting this class in the HTML code */
    $('html, body').animate({scrollTop: $('.js--section-seconds').offset().top}, 1000); /* This is what happens to the HTML of the code, the 'animation of the page' */
});