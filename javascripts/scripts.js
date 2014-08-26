$(function() {

    $(".fixed, .sidebar, .screen").on('click', function() {
        $('.sidebar').toggleClass('show');
        $('.toggle-it, .screen-wrapper').toggleClass('on');
        $('.play-div').toggleClass('hide-play');
        $('.plus-to-minus').toggleClass('fade');
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


//
// BEGIN MOBILE ROTATION ZOOM FIX
//
(function(doc) {

    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }

}(document));
