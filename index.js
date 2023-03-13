const openMenu = document.querySelector('.hamburger-container__img');
const closeMenu = document.querySelector('.hamburger__close-img');
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menu-links');

// Opening the hamburger menu
function openHamburgerMenu() {
  hamburger.classList.remove('hidden');
}

openMenu.addEventListener('click', openHamburgerMenu);

// Closing the hamburger menu

function closeHamburgerMenu() {
  hamburger.classList.add('hidden');
}

closeMenu.addEventListener('click', closeHamburgerMenu);

// Go to the link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.add('hidden');
  });
});
