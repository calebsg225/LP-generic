// class of helper functions
import Helpers from "./helpers/helpers.js";
// import main components
import header from "./components/header.js";
import main from "./components/main.js";
import footer from "./components/footer.js";

const body = document.body;

Helpers.appendElements([header, main, footer], body);
