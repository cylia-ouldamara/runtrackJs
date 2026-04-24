$(document).ready(function () {

    $("#monInput").focus(function () {
        $(this).animate({
            width: "350px"
        }, 300);
    });

    $("#monInput").blur(function () {
        $(this).animate({
            width: "200px"
        }, 300);
    });

});