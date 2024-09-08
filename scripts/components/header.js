import helpers from "../helpers/helpers.js";
import { navbar, navbarSpaceButton } from "./navbar.js";
import { onHamburgerOpen } from "../functions/headerFunctions.js";

const header = document.createElement('header');
header.id = 'header-component';

const logo = document.createElement('img');
logo.id = 'generic-logo';
logo.src = './assets/generic-logo.png';
logo.alt = 'generic_logo';

const hamburgerIcon = document.createElement('img');
hamburgerIcon.id = 'hamburger-icon';
hamburgerIcon.src = './assets/hamburger_icon.png';
hamburgerIcon.alt = 'hamburger_icon';
hamburgerIcon.onclick = () => onHamburgerOpen();

helpers.appendElements([logo, navbar, hamburgerIcon], header);

export default header;