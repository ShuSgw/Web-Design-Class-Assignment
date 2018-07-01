jQuery(function () {
    console.log("hello");
    //main nav
    $('.fa-bars').on('click', function () {
        $(this).siblings('#callNav').hide();
        $(this).siblings('#navMenu').slideToggle();
    });
    $('.fa-phone-volume').on('click', function () {
        $(this).siblings('#navMenu').hide();
        $(this).siblings('#callNav').slideToggle();
    });
    // subnav
    $("li").mouseenter(function () {
        $(this).siblings().find("#sub").hide();
        $(this).children().slideDown(150);
        $(this).find('.fa-sort-down').hide();
    });
    $('html').click(function () {
        $('#sub').slideUp(150);
    });

    //slide
    $("header").bgswitcher({
        images: ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg"],
        interval: "2000"
    });
});