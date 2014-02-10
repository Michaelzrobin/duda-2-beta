$(function() {

    $(".fixed, .sidebar").on('click', function() {
        $('.sidebar').toggleClass('show');
        $('.toggle-it, .screen-wrapper').toggleClass('on');
        $('.play-div').toggleClass('hide-play');
    });

    $('.series-title, .description-screen').on('click', function() {
        $('.plus-to-minus, .sidebar').toggleClass('on');
    });
    $('.series-title, .description-screen').on('click', function() {
        $('.toggle-it, .plus-to-minus, .sidebar').toggleClass('color-change');
    });

    $(".screen-wrapper").waypoint(function () {
        var $this = $(this);
        var $projectDesctiptions = $(".project-description p");

        $projectDesctiptions.toggleClass("active", false);

        $this
            .find(".project-description p")
            .toggleClass("active", true);

    });
});

//
// BEGIN SCRIPT
// to remove highlight from link to "current" page
// when hovering over other links in sidebar
//

$(document).ready(function(){
    $(".sidebar a").mouseenter(function(){
        $("div.sidebar").removeClass("current-page-link");
    });

    $(".sidebar a").mouseleave(function(){
        $("div.sidebar").addClass("current-page-link");
    });
});



