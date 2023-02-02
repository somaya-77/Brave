// header scroll
function navbarBg() {

    let navbar = document.querySelector('nav');
    let scrollbar = window.scrollY;

    if (scrollbar < 200) {

        navbar.classList.remove('nav-bg');
    }else {
        navbar.classList.add("nav-bg")
    }
}

window.addEventListener('scroll', navbarBg)






let li = document.querySelector(".dropdown-1");

let ul = document.querySelector(".subdrop-1");

li.addEventListener('click', () => {
    if(ul.style.display === 'none'){
        ul.style.display = 'block'
    }else{
        ul.style.display = 'none'
    }
})


let li2 = document.querySelector(".dropdown-2");

let ul2 = document.querySelector(".subdrop-2");

li2.addEventListener('click', () => {
    if(ul2.style.display === 'none'){
        ul2.style.display = 'block'
    }else{
        ul2.style.display = 'none'
    }
})


let li3 = document.querySelector(".dropdown-3");

let ul3 = document.querySelector(".subdrop-3");

li3.addEventListener('click', () => {
    if(ul3.style.display === 'none'){
        ul3.style.display = 'block'
    }else{
        ul3.style.display = 'none'
    }
})


let li4 = document.querySelector(".dropdown-4");

let ul4 = document.querySelector(".subdrop-4");

li4.addEventListener('click', () => {
    if(ul4.style.display === 'none'){
        ul4.style.display = 'block'
    }else{
        ul4.style.display = 'none'
    }
})






