const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
const menuOpen = document.getElementsByClassName('menu--open');
  if (menuOpen.style.display === "none") {
    menuOpen.style.display = "block";
  } else {
    menuOpen.style.display = "none";
  }
};



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', event => {
  toggleMenu(event);
});