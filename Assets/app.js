$( document ).ready(function() {
    // About button scrolling
    $("#bio-button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-box").offset().top
        }, 1000);
    });

    $("#insta").click(function(){
        window.open('https://instagram.com/ameliamooretattoos?utm_source=ig_profile_share&igshid=8u2hu0dvlxh6', '_blank');
    });
});
