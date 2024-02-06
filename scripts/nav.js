let menu = document.getElementById('btn-menu')
let navBoxFirst = document.querySelector('.nav-box-first')
let navBox = document.querySelector('.nav-box')

menu.addEventListener("click", abrirMenu)
addEventListener('resize', ()=>{
    if (window.innerWidth > 991) {
        navBoxFirst.style.display = "flex"
        navBox.style.display = "flex"
    } else {
        navBoxFirst.style.display = "none"
        navBox.style.display = "none"
        menu.removeAttribute('class', 'rotate-menu') 
    }
})

function abrirMenu() {
    if (navBoxFirst.style.display == "flex" && navBox.style.display == "flex") {
        navBoxFirst.style.display = "none"
        navBox.style.display = "none"
        menu.removeAttribute('class', 'rotate-menu')        
    }
    else {
        navBoxFirst.style.display = "flex"
        navBox.style.display = "flex"
        menu.setAttribute('class', 'rotate-menu')        
    }
}

