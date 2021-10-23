$(document).ready(function () {
    "use strict";
    var mainWrapper = $('.main-wrapper');
    var navbarToggler = $('.navbar-toggler');
    var navbarCollapse = $('.collapse.navbar-collapse');

    //loading
    $('.loading').delay(500).fadeOut(100);

    navbarToggler.on("click", function () {
        navbarCollapse.toggleClass('active');
        $('body').toggleClass('over-flow');
    });

    //toggle between menue and x in navbar
    $("header .navbar-toggler").on("click", function () {
        if (navbarCollapse.hasClass("active")) {
            $(this).addClass('close')
        } else {
            $(this).removeClass('close')
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        } else {
            if ($(this).scrollTop() < 1) {
                $('header').removeClass("sticky");
            }
        }
    });

    //navbar collapse
    $('.navbar-collapse.collapse').mouseleave(function () {
        $(this).removeClass('show', 1000);
        $('.navbar-toggler').removeClass('close', 1000)
    });

    //alert warning
    $('.alert.alert-warning button.close').on('click', function () {
        $('.alert.alert-warning').fadeOut();
    });

    //wow
    new WOW().init();

    //loading
    $('.loading').delay(500).fadeOut(500);

    //slider carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeInDown',
        animateIn: 'slideOutDown',
        dotsSpeed: 100,
        smartSpeed:100,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
            }
        }
    });

    //partners carousel
    $('.partners-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dotsEach: 2,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
            }
        }
    });

    //
    mainWrapper.each(function () {
        if ($(this).find('div').hasClass('page')) {
            $(this).find('header').addClass('bg-changed')
        }
    });

    $('input[type="file"]').each(function () {
        // get label text
        var label = $(this).parents('.form-group').find('label').text();
        label = (label) ? label : 'Upload File';

        // wrap the file input
        $(this).wrap('<div class="input-file"></div>');
        // display label
        $(this).before('<a class="text">' + label + '</a>');
        // we will display selected file here
        $(this).before('<span class="file-selected"></span>');

        // file input change listener 
        $(this).change(function (e) {
            // Get this file input value
            var val = $(this).val();

            // Let's only show filename.
            // By default file input value is a fullpath, something like 
            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
            var filename = val.replace(/^.*[\\\/]/, '');

            // Display the filename
            $(this).siblings('.file-selected').text(filename);
        });
    });

    // Open the file browser when our custom button is clicked.
    $('.input-file .text').click(function () {
        $(this).siblings('input[type="file"]').trigger('click');
    });

    //custom select
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    $("#timerange").slider({
        from: 1,
        to: 24,
        step: 1,
        smooth: true,
        round: 0,
        dimension: "&nbsp;mon",
        skin: "round"
    });
    $("#budgetrange").slider({
        from: 100,
        to: 20000,
        step: 100,
        smooth: true,
        round: 0,
        dimension: "&nbsp;$",
        skin: "round"
    });
});