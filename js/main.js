$('.internet-slider').slick({
    dots: true,
    arrows: false,
    speed: 500,
});

$('.tariff-slider').slick({
    dots: true,
    arrows: false,
    speed: 800,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.partners-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})

$(function() {
    //задание заполнителя с помощью параметра placeholder
    // $("#date").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
    //задание заполнителя с помощью параметра placeholder
    $(".box__inputs-input-tel").mask("+7(___)___-__-__*", { placeholder: "" });
});

const menuIcon = document.querySelector('.header-menu__burger');
const menuBody = document.querySelector('.header-menu-body');
const menuBtnClose = document.querySelector('.header-menu-body__btn-close');

menuIcon.addEventListener('click', function() {
    menuBody.classList.add('active');
})

menuBtnClose.addEventListener('click', function() {
    menuBody.classList.remove('active');

})