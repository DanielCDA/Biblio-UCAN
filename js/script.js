const menu = document.querySelector('#menu');
const navMenu = document.querySelector('.nav-menu');
 navMenu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
 })