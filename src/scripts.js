const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav')

burger.addEventListener('click', () => {

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        burger.src = ('img/menu close.png');
        document.body.classList.add("stop-scrolling");
        nav.classList.remove('border-bottom');
        nav.classList.add('border-bottom-white');
    }
    else{
        menu.classList.add('hidden');
        burger.src = ('img/menu-button-of-three-horizontal-lines.png');
        document.body.classList.remove("stop-scrolling");
        nav.classList.add('border-bottom');
        nav.classList.remove('border-bottom-white');
    } 
})