// Select DOM Items
const menuOpener = document.querySelector('.menu-opener');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuPhoto = document.querySelector('.menu-photo');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuOpener.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (showMenu == false) {
    menuOpener.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuPhoto.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuOpener.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuPhoto.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


