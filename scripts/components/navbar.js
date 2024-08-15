import helpers from "../helpers/helpers.js";

const navbar = document.createElement('nav');
navbar.id = 'header-navbar';
navbar.className = 'hide-nav';

const mainTitles = ['Services', 'About', 'Contact', 'Join Today'];

const elements = [];

for (const title of mainTitles) {
  const element = document.createElement('button');
  element.id = `${title.toLowerCase().split(' ')[0]}-nav-button`;
  element.innerText = title;
  elements.push(element);
}

helpers.appendElements(elements, navbar);

export default navbar;