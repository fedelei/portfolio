const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const scrollReveal = ScrollReveal({
    distance: "65px",
    duration: 2000,
    delay: 450,
    reset: true
})

scrollReveal.reveal('.hero-text', {delay: 200, origin: 'top'})
scrollReveal.reveal('.hero-img', {delay: 400, origin: 'top'})
scrollReveal.reveal('.icons', {delay: 500, origin: 'left'})
scrollReveal.reveal('.scroll-down', {delay: 450, origin: 'right'})