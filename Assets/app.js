$( document ).ready(function() {
    // About button scrolling
    $("#bio-button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-box").offset().top
        }, 1000);
    });

});
