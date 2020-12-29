// Narrow the navbar on scroll

// $(window).scroll(function () {
//     var nb = $(".navbar")
//     if (nb.offset().top > 50) {
//         nb.addClass("navbar-narrow");
//     } else {
//         nb.removeClass("navbar-narrow");
//     }
// });

window.onscroll = function () {
    let nb = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nb.classList.add("navbar-narrow");
    } else {
        nb.classList.remove("navbar-narrow");
    }
};

// Close the Responsive Menu on Menu Item Click

// $(".navbar-collapse ul li a").click(function () {
//     $(".navbar-toggler:visible").click();
// });

// Close the Responsive Menu on Menu Item Click
document.querySelectorAll(".navbar-collapse ul li a").forEach(function(item) {
    item.addEventListener('click',function () {
        document.querySelector(".navbar-toggler:not(.collapsed)").click();
    });
});

// Smooth Scrolling
// Select all links with hashes
// Remove links that don't actually link to anything
// $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
//     // On-page links
//     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
//         && location.hostname === this.hostname) {
//         // Figure out element to scroll to
//         var theHash = this.hash;
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         // Does a scroll target exist?
//         if (target.length) {
//             // Only prevent default if animation is actually gonna happen
//             event.preventDefault();
//             $('html, body').animate({scrollTop: target.offset().top}, 1000).promise().then(function () {
//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = theHash;
//
//                 // Google analytics # tracking
//                 if (typeof gtag === "function") {
//                     gtag('config', '{{ site.google_analytics }}', {
//                         'page_title': document.title,
//                         'page_path': document.URL
//                     });
//                 }
//                 console.log(document.URL);
//
//                 // Callback after animation
//                 // Must change focus!
//                 var $target = $(target);
//                 $target.focus();
//                 if ($target.is(":focus")) { // Checking if the target was focused
//                     return false;
//                 } else {
//                     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                     $target.focus(); // Set focus again
//                 }
//             });
//         }
//     }
// });


