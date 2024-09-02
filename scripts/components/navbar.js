import helpers from "../helpers/helpers.js";
import { onHamburgerClose } from "../functions/headerFunctions.js";

const navbar = document.createElement('nav');
navbar.id = 'header-navbar';
navbar.className = 'hide-nav';

const mainTitles = ['Services', 'About', 'Contact', 'Join Generic'];

const elements = [];
for (const title of mainTitles) {
  const element = document.createElement('button');
  element.id = `${title.toLowerCase().split(' ')[0]}-nav-button`;
  element.innerText = title;
  elements.push(element);
}

// closes hamburger menu
const exitMenuButton = document.createElement('img');
exitMenuButton.id = 'exit-hamburger-menu';
exitMenuButton.src = './assets/cross.png';
exitMenuButton.alt = 'exit_X';
exitMenuButton.onclick = () => onHamburgerClose();

// empty space between sidebar and edge of screen
// toggles hamburger menu
const navbarSpaceButton = document.createElement('div');
navbarSpaceButton.id = 'navbar-space-button';
navbarSpaceButton.onclick = () => onHamburgerClose();

helpers.appendElements([exitMenuButton, ...elements, navbarSpaceButton], navbar);

export { navbar, navbarSpaceButton };