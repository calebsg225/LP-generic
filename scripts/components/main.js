import helpers from "../helpers/helpers.js";

const main = document.createElement('main');
main.id = 'main-component';

// contains title, subtitle, and call to action
const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';

const contentTitle = document.createElement('h1');
contentTitle.innerText = "Generic Products For Generic People"

const contentSubtitle = document.createElement('h2');
contentSubtitle.innerText = "Generic generic generic generic generic generic generic generic generic generic generic generic generic generic generic generic generic generic generic ";

const contentCallToAction = document.createElement('button');
contentCallToAction.innerText = "Join Generic";

helpers.appendElements([contentTitle, contentSubtitle, contentCallToAction], contentContainer);

// contains 'hero' image relating to generic product/company
const imageContainer = document.createElement('div');
imageContainer.id = 'image-container';

const image = document.createElement('img');
image.src = "./assets/main-image.png";
image.alt = 'main-image';

helpers.appendElements([image], imageContainer);

helpers.appendElements([contentContainer, imageContainer], main);

export default main;