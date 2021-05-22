$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function() {
        console.log("Hi");
        if($("#carouselButton").children("i").hasClass("fa-pause")) {
            console.log("Hi 2");
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            console.log("Hi 3")
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(document).ready(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
});

$(document).ready(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
});