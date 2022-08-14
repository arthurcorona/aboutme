//nav menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('navClose')


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

function arrowRotate() {
//    skills_list = document.querySelector('skills_list')
//     skills_list.style.display = 'block'


teste = document.getElementById("teste").style.display = 'none'
teste1 = document.getElementByClassName("teste1").style.display = 'none'

}
