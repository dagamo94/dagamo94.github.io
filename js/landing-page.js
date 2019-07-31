$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > ($(".carousel-item").height() - $nav.height() * 2));
    });
});