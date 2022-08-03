import './style.css';
import {callAPI} from "./functions.js"
import {displayData, displaySearch} from "./display-data.js"

displaySearch();

async function loadDefault() {
  let defaultDisplay = await callAPI("Accra");
  displayData(defaultDisplay);
}

loadDefault();
