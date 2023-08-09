import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
flsFunctions.sliders();

document.addEventListener('DOMContentLoaded', flsFunctions.updateCopyrightYear());

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header, 991.98);
}
// if (header) {
//     flsFunctions.fixedHeader(header)
// }

const language = document.querySelector('.language');
const languageCurrent = document.querySelector('.language-current');

if (language && languageCurrent) {
    flsFunctions.toggler(language, languageCurrent);
}

const headerNavList = document.querySelector('.header__nav-list');
const headerNavListButton = document.querySelectorAll('.header__nav-list li button');

if ((headerNavList, headerNavListButton)) {
    flsFunctions.headerMenu(headerNavListButton, '.header__nav-list li button');
}

new Swiper('.slider-hero__body', {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    touchRatio: 0,
    simulateTouch: true,
    loop: true,
    preloadImages: false,
    lazy: true,
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
});

new Swiper('.slider-donation__body', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
});

// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })
