$(function() {

    $(".fixed, .sidebar").on('click', function() {
        $('.sidebar').toggleClass('show');
        $('.toggle-it, .screen-wrapper').toggleClass('on');
        $('.play-div').toggleClass('hide-play');
    });

    $('.series-title, .description-screen').on('click', function() {
        $('.plus-to-minus').toggleClass('on');
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