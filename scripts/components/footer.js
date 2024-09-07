import helpers from "../helpers/helpers.js";

const footer = document.createElement('footer');
footer.id = 'footer-component';

// file names for sponsor icon pngs
const sponsorImages = ['currency', 'generic', 'genetic', 'molecule', 'spruce'];

const sponsorContainer = document.createElement('div');
sponsorContainer.id = 'sponsor-container';

const elements = [];

for (const sponsorImage of sponsorImages) {
  const sponsorButton = document.createElement('button');
  sponsorButton.id = 'sponsor-button';

  const sponsor = document.createElement('img');
  sponsor.id = `${sponsorImage}-sponsor`;
  sponsor.src = `./assets/sponsor icons/${sponsorImage}.png`;
  sponsor.alt = `${sponsorImage}-sponsor`;

  helpers.appendElements([sponsor], sponsorButton);
  elements.push(sponsorButton);
}

helpers.appendElements(elements, sponsorContainer);

const copyright = document.createElement('p');
copyright.innerText = "Copyright \u{00A9} 2024. All rights reserved."

helpers.appendElements([sponsorContainer, copyright], footer);

export default footer;