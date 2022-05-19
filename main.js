window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
} 

function activateMenuAtCurrentSection(section) {

    const targetLine = scrollY + innerHeight / 2

    // Verificar se a secao passou da linha
    // Quais dados vou precisar ? 

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    
    // o topo da secao chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
   
    const sectionEndsAt = sectionTop + sectionHeight 
    
    // o Final da secao passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <=
    targetLine 
    
    const sectionBoundaries = sectionTopReachOrPassedTargetline && 
        !sectionEndPassedTargetline
    
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {
      if(scrollY > 0) { 
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}  

    function openMenu() {
        document.body.classList.add('menu-expanded')
    }

    function closeMenu() {
        document.body.classList.remove('menu-expanded')
    }


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)


