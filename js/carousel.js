$(document).ready(function () {
    $(function(){
        $(".carosel").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 2,
            auto: 5000,
            speed: 1000
        });
    });

});