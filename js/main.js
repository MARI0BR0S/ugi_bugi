$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 7000
});

const hamburger = document.querySelector('span.burger');
const navElements = [...document.querySelectorAll('nav.top-navigator,.godlo,.logo')]

// zmiana rozmiaru nawigacji --> klasa resize
const changeNavSize = function () {
    if (window.scrollY > 0) {
        navElements.forEach((element) => {
            element.classList.add('minimize');
        })

    }
    else  navElements.forEach((element) => {
        element.classList.remove('minimize');
    })
  }

const showMegaMenu = function () { 
    this.classList.toggle('active');
    document.querySelector('.mega-menu-container').classList.toggle('active');
    document.body.classList.toggle('active')
 }

window.addEventListener('scroll', changeNavSize); 
hamburger.addEventListener('click', showMegaMenu);