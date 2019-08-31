$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > ($(".carousel-item").height() - $nav.height() * 2));
    });
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".contact-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > (10 - $nav.height() * 2));
    });
});