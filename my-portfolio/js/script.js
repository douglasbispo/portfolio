$(document).ready(function () {

    /* mouse scroll */
    $(window).scroll(function () {

        /* show navbar background */
        if (this.scrollY > 20) {
            $(".navbar").addClass("nav-fixed");
        }
        else {
            $(".navbar").removeClass("nav-fixed");
        }

        /* show scroll button up */
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        }
        else {
            $(".scroll-up-btn").removeClass("show");
        }

    });

    /* scroll top */
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
    });


    $(".menu-btn .checkbox").click(function () {
        $(".navbar .nav-tools").toggleClass("activated");
        $(".menu-btn i").toggleClass("activated");
    });

});