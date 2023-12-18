/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validation if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validation if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header to the header tag
    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function showScroll() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewpoint height, add the show_scroll-up class to a tag with the scroll-top class.
    if (this.scrollY >= 350) scrollUp.classList.add('show__scroll'); else scrollUp.classList.remove('show__scroll')
}
window.addEventListener('scroll', showScroll)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

sr = ScrollReveal({
    distance: '100px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {origin: 'top', delay: 900})
sr.reveal(`.sponsor__img, .product__card`, {origin: 'top', interval: 100})
sr.reveal(`.spec__img, .discount__img, .case__data`, {origin: 'right', interval: 100})
sr.reveal(`.case__img, .discount__animate, .spec__content`, {origin: 'left', interval: 100})
sr.reveal(`.footer__logo`, {origin: 'left', delay: 900})
sr.reveal(`.footer__content`, {origin: 'right', delay: 900, interval: 200})
sr.reveal(`.footer__copy`, {origin: 'bottom', delay: 100})
