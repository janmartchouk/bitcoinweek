var menuOpen = false

function openMenu() {
    document.querySelector('.mobmenu').style.width = '64vw';
    document.querySelector('.mobbutton').classList.toggle('mdi-menu');
    document.querySelector('.mobbutton').classList.toggle('mdi-close');
    menuOpen = true;
}

function closeMenu() {
    document.querySelector('.mobmenu').style.width = '0px';
    document.querySelector('.mobbutton').classList.toggle('mdi-menu');
    document.querySelector('.mobbutton').classList.toggle('mdi-close');
    menuOpen = false;
}

function toggleMenu() {
    if(menuOpen == true) {
        closeMenu();
    } else {
        openMenu();
    }
}