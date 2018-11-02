var input = document.querySelector("#phone");
window.intlTelInput(input);
$(function() {
    $('#grid').masonry({
        itemSelector: '.item',
        columnWidth: 5
    });
});
$(window).resize(function() {
    $(function() {
        $('#grid').masonry({
            itemSelector: '.item',
            columnWidth: 5
        });
    });
});
$(function() {
    $.scrollify({
        section: ".panel",
        sectionName: false,
        interstitialSection: ".footer"
    });
});
if (head.screen.innerWidth < 800) {
    document.getElementById("main-wrapper").style.display = "none";
    document.getElementById("excuse").style.display = "block";
}
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
})
$(document).ready(function() {
    $(".get-started").mouseenter(function() {
        $(this).children('img').attr("src", "img/Symbol 2 – 4.png");
    });
    $(".get-started").mouseleave(function() {
        $(this).children('img').attr("src", "img/Symbol 2 – 4_white.png");
    });
});
$(document).ready(function() {
    $(".btn-outline-light").mouseenter(function() {
        $(this).children('img').attr("src", "img/Symbol 2 – 4.png");
    });
    $(".btn-outline-light").mouseleave(function() {
        $(this).children('img').attr("src", "img/Symbol 2 – 4_white.png");
    });
});
$(document).ready(function() {
    $.reject({
        reject: {
            all: false,
            msie: 8
        }
    }); // Customized Browsers  

    return false;
});