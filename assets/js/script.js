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

function backendList() {

backendListDisplay = document.getElementById("backend_list").style.display = 'none'
backendRotation = document.getElementById("arrow_backend").style.transform = 'rotate(180deg)'

}

function designList() {

designListDisplay = document.getElementById("design_list").style.display = 'none'
designRotation = document.getElementById("arrow_design").style.transform = 'rotate(180deg)'

}
