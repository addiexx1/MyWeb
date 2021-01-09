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

//submit the form
const myForm = document.getElementById('myForm');
myForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const submitMessage = document.getElementById('submitMessage');
  const fname = document.querySelector('#fname').value;
  submitMessage.appendChild(document.createTextNode(`Thank you ${fname}, the form has been submitted!`));
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#city").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#message").value = "";
  const request = new XMLHttpRequest();
  request.open('post','form.php');
  request.onload = function(){
    console.log(request.responseText);
  }
  request.send(new FormData(myForm));

} )



