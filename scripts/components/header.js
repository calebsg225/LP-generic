import helpers from "../helpers/helpers.js";
import navbar from "./navbar.js";

const header = document.createElement('header');
header.id = 'header-component';

const logo = document.createElement('img');
logo.id = 'generic-logo';
logo.src = './assets/generic-logo-2.png';
logo.alt = 'generic-logo';

helpers.appendElements([logo, navbar], header);

export default header;