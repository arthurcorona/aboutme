//nav menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

        // MENU MOBILE (remove)
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // quando clicar em nav_link, será removido a class "show-menu"
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

                                                                //skills

const skillsContent = document.getElementByClassName('skills_content')
const skillsHeader = document.querySelector('.skills_header')

function changeSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.lenght; i++) {
        skillsContent[1].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((change) => {
    change.addEventListener('click', changeSkills)
})



//showing skills list of front, back and design

function frontendList() {
    if(document.getElementById("frontend_list").style.display == 'none') {
        frontendListDisplay = document.getElementById("frontend_list").style.display = 'block'
    }
    else{
        frontendListDisplay = document.getElementById("frontend_list").style.display = 'none'
    }
}

function backendList() {
    if(document.getElementById("backend_list").style.display == 'none') {
        backendListDisplay = document.getElementById("backend_list").style.display = 'block'
    }
    else{
        backendListDisplay = document.getElementById("backend_list").style.display = 'none'
    }
}

function designList() {
    if(document.getElementById("design_list").style.display == 'none') {
        designListDisplay = document.getElementById("design_list").style.display = 'block'
    }
    else {
        designListDisplay = document.getElementById("design_list").style.display = 'none'
    }
}

function frontendListDark() {
    if(document.getElementById("frontend_list-dark").style.display == 'none') {
        frontendListDisplay = document.getElementById("frontend_list-dark").style.display = 'block'
    }
    else{
        frontendListDisplay = document.getElementById("frontend_list-dark").style.display = 'none'
    }
}

function backendListDark() {
    if(document.getElementById("backend_list-dark").style.display == 'none') {
        backendListDisplay = document.getElementById("backend_list-dark").style.display = 'block'
    }
    else{
        backendListDisplay = document.getElementById("backend_list-dark").style.display = 'none'
    }
}

function designListDark() {
    if(document.getElementById("design_list-dark").style.display == 'none') {
        designListDisplay = document.getElementById("design_list-dark").style.display = 'block'
    }
    else {
        designListDisplay = document.getElementById("design_list-dark").style.display = 'none'
    }
}

// var swiper = new Swiper('.portifolio_container', {
//     cssMode: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination'
//     },
//     mousewheel: true,
//     keyboard: true,
//   });

const sections = document.querySelector('section[id]')

function scrollActive() {
    const scroolY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }
        else{
            document.querySelector('nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader() {
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header') 
    }
window.addEventListener('scroll', scrollHeader)


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    
    if(this.scrollY >= 560) scrollUp.classList.add('showscroll'); else scrollUp.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollUp)

// dark theme

function darkMode() {

    document.getElementById("dark-theme-skills").style.display = 'block'
    document.getElementById("light-theme-skills").style.display = 'none'
    document.getElementById("light-theme").style.display = 'block'
    document.getElementById("dark-theme").style.display = 'none'
    document.querySelector("body").style.backgroundColor = '#1C1C1C'
    document.querySelector("header").style.backgroundColor = "#FFF"
    document.getElementById("nav-menu").style.display = '#FFF'
    document.getElementById("feedback-light").style.display = 'none'
    document.getElementById("feedback-dark").style.display = 'block'
    document.getElementById("client1-light").style.display = 'none'
    document.getElementById("client1-dark").style.display = 'block'
    document.getElementById("contact-light").style.display = 'none'
    document.getElementById("contact-dark").style.display = 'block'
    document.getElementById("callme-light").style.display = 'none'
    document.getElementById("callme-dark").style.display = 'block'
    document.getElementById("email-light").style.display = 'none'
    document.getElementById("email-dark").style.display = 'block'
    document.getElementById("local-light").style.display = 'none'
    document.getElementById("local-dark").style.display = 'block'
    document.getElementById("linkedin-light").style.display = 'none'
    document.getElementById("linkedin-dark").style.display = 'block'
    document.getElementById("github-light").style.display = 'none'
    document.getElementById("github-dark").style.display = 'block'
    document.querySelector("body").style.color = '#FFF'
    document.querySelector("h1").style.color = '#FFF'
    document.querySelector("h2").style.color = '#FFF'
    document.getElementById("main").style.color = '#FFF'
    document.querySelector(".qualification_title").style.display = '#FFF'
    document.querySelector(".portifolio_title").style.color = '#FFF'
    document.getElementById("1").style.color = '#FFF'
    document.getElementById("2").style.color = '#FFF'
    document.getElementById("3").style.color = '#FFF'
    document.getElementById("4").style.color = '#FFF'
    document.getElementById("5").style.color = '#FFF'
    document.getElementById("6").style.color = '#FFF'
    document.getElementById("7").style.color = '#FFF'
    document.getElementById("8").style.color = '#FFF'
    document.getElementById("9").style.color = '#FFF'
    document.getElementById("10").style.color = '#FFF'
    document.getElementById("11").style.color = '#FFF'
    document.getElementById("12").style.color = '#FFF'
    document.getElementById("13").style.color = '#FFF'
    document.getElementById("14").style.color = '#FFF'
    document.getElementById("15").style.color = '#FFF'
    document.getElementById("16").style.color = '#FFF'
    document.getElementById("17").style.color = '#FFF'  
    document.getElementById("18").style.color = '#FFF'
    document.getElementById("19").style.color = '#FFF'
    document.getElementById("20").style.color = '#FFF'
    document.getElementById("21").style.color = '#FFF'
    document.getElementById("22").style.color = '#FFF'
    document.getElementById("23").style.color = '#FFF'
    document.getElementById("24").style.color = '#FFF'
    document.getElementById("25").style.color = '#FFF'
    document.getElementById("26").style.color = '#FFF'
    document.getElementById("27").style.color = '#FFF'
    document.querySelector(".section_title").style.color = '#FFF'

    // document.getElementById("test").style.color = '#FFF'
}

function lightMode() {
    document.getElementById("dark-theme-skills").style.display = 'none'
    document.getElementById("light-theme-skills").style.display = 'block'
    document.getElementById("light-theme").style.display = 'none'
    document.getElementById("dark-theme").style.display = 'block'
    document.getElementById("feedback-light").style.display = 'block'
    document.getElementById("feedback-dark").style.display = 'none'
    document.getElementById("client1-light").style.display = 'block'
    document.getElementById("client1-dark").style.display = 'none'
    document.getElementById("contact-light").style.display = 'block'
    document.getElementById("contact-dark").style.display = 'none'
    document.getElementById("callme-light").style.display = 'block'
    document.getElementById("callme-dark").style.display = 'none'
    document.getElementById("email-light").style.display = 'block'
    document.getElementById("email-dark").style.display = 'none'
    document.getElementById("local-light").style.display = 'block'
    document.getElementById("local-dark").style.display = 'none'
    document.getElementById("linkedin-light").style.display = 'block'
    document.getElementById("linkedin-dark").style.display = 'none'
    document.getElementById("github-light").style.display = 'block'
    document.getElementById("github-dark").style.display = 'none'
    document.querySelector("body").style.backgroundColor = 'var(--body-color)'
    document.querySelector("body").style.color = 'rgb(109, 106, 124)'
    document.querySelector("h1").style.color = 'rgb(109, 106, 124)'
    document.querySelector("h2").style.color = 'rgb(109, 106, 124)'
    document.getElementById("main").style.color = 'rgb(109, 106, 124)'
    document.querySelector("h3").style.color = 'rgb(109, 106, 124)'
    document.getElementById("1").style.color = 'rgb(109, 106, 124)'
    document.getElementById("2").style.color = 'rgb(109, 106, 124)'
    document.getElementById("3").style.color = 'rgb(109, 106, 124)'
    document.getElementById("4").style.color = 'rgb(109, 106, 124)'
    document.getElementById("5").style.color = 'rgb(109, 106, 124)'
    document.getElementById("6").style.color = 'rgb(109, 106, 124)'
    document.getElementById("7").style.color = 'rgb(109, 106, 124)'
    document.getElementById("8").style.color = 'rgb(109, 106, 124)'
    document.getElementById("9").style.color = 'rgb(109, 106, 124)'
    document.getElementById("10").style.color = 'rgb(109, 106, 124) '
    document.getElementById("11").style.color = 'rgb(109, 106, 124)'
    document.getElementById("12").style.color = 'rgb(109, 106, 124)'
    document.getElementById("13").style.color = 'rgb(109, 106, 124)'
    document.getElementById("14").style.color = 'rgb(109, 106, 124)'
    document.getElementById("15").style.color = 'rgb(109, 106, 124)'
    document.getElementById("16").style.color = 'rgb(109, 106, 124)'
    document.getElementById("17").style.color = 'rgb(109, 106, 124)'
    document.getElementById("18").style.color = 'rgb(109, 106, 124)'
    document.getElementById("19").style.color = 'rgb(109, 106, 124)'
    document.getElementById("20").style.color = 'rgb(109, 106, 124)'
    document.getElementById("21").style.color = 'rgb(109, 106, 124)'
    document.getElementById("22").style.color = 'rgb(109, 106, 124)'
}

