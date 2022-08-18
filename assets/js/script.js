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


