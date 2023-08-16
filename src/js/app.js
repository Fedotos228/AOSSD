import * as flsFunctions from './modules/functions.js';
import 'fslightbox';
import './modules/default.js';

flsFunctions.isWebp();
flsFunctions.sliders();


const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
    flsFunctions.burger(burger, menu, header, 991.98);
}

const language = document.querySelector('.language');
const languageCurrent = document.querySelector('.language-current');

if (language) {
    languageCurrent.addEventListener('click', () => {
        language.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const isClickInside = languageCurrent.contains(e.target);
        if (!isClickInside) {
            language.classList.remove('active');
        }
    });
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
        lazyImageReady: function() {
            ibg();
        },
    },
});

new Swiper('.slider-donation__body', {
    slidesPerView: 2,
    spaceBetween: 30,
    grid: {
        rows: 2,
        fill: "row"
    },
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },
    on: {
        lazyImageReady: function() {
            ibg();
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: true,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoHeight: true,
            grid: {
                rows: 2,
                fill: "row"
            },
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
                rows: 2,
                fill: "row"
            },
        },
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const reports = document.querySelectorAll('.report');
    const fileExtensions = ['pdf', 'docx', 'zip'];

    if (reports.length > 0) {
        reports.forEach((report) => {
            const reportDocument = report.querySelector('a.button').href;
            const extension = reportDocument.split('.').pop().toLowerCase();

            if (fileExtensions.includes(extension)) {
                report.querySelector('img').src = `${window.location.origin}/img/${extension}.svg`
            }
        })
    }
});