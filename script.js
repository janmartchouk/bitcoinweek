var menuOpen = false

function openMenu() {
    document.querySelector('.mob__menu').style.width = "100vw";
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.mob__btn').classList.toggle('mdi-menu');
    document.querySelector('.mob__btn').classList.toggle('mdi-close');
    menuOpen = true; 
}

function closeMenu() {
    document.querySelector('.mob__menu').style.width = "0";
    document.querySelector('body').style.overflow = "visible";
    document.querySelector('.mob__btn').classList.toggle('mdi-menu');
    document.querySelector('.mob__btn').classList.toggle('mdi-close');
    menuOpen = false;
}

function toggleMenu() {
    if( menuOpen == true ) {
        closeMenu();
    } else {
        openMenu();
    }
}