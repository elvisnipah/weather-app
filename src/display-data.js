import {callAPI} from "./functions.js"

function displaySearch() {
  let {body} = document;
  let container = document.createElement("div");
  let myForm = document.createElement("form");
  let locationLabel = document.createElement("label");
  let firstDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let locationInput = document.createElement("input");
  let submitBtn = document.createElement("button");
  let display = document.createElement("div");
  display.setAttribute("id", "display");

  locationLabel.textContent = "Enter a city: ";
  locationLabel.setAttribute("for", "location-input");
  locationLabel.classList.add('mb-2', 'text-sm', 'font-medium', 'text-gray-900', 'sr-only', 'dark:text-gray-300');

  firstDiv.classList.add("relative");

  secondDiv.classList.add('flex', 'absolute', 'inset-y-0', 'left-0', 'items-center', 'pl-3', 'pointer-events-none');

  firstDiv.appendChild(secondDiv);

  locationInput.setAttribute("name", "location-input");
  locationInput.setAttribute("id", "location-input");
  locationInput.setAttribute("type", "search");
  locationInput.classList.add('block', 'p-4', 'pl-10', 'w-full', 'text-sm', 'text-gray-900', 'bg-gray-50', 'rounded-lg', 'border', 'border-gray-300', 'focus:ring-blue-500', 'focus:border-blue-500', 'dark:bg-gray-700', 'dark:border-gray-600', 'dark:placeholder-gray-400', 'dark:text-white', 'dark:focus:ring-blue-500', 'dark:focus:border-blue-500');
  locationInput.required = true;
  locationInput.setAttribute("placeholder", "Search...");

  firstDiv.appendChild(locationInput);

  submitBtn.textContent = "Search";
  submitBtn.classList.add('text-white', 'absolute', 'right-2.5', 'bottom-2.5', 'bg-blue-700', 'hover:bg-blue-800', 'focus:ring-4', 'focus:outline-none', 'focus:ring-blue-300', 'font-medium', 'rounded-lg', 'text-sm', 'px-4', 'py-2', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'dark:focus:ring-blue-800');

  firstDiv.appendChild(submitBtn);

  myForm.appendChild(locationLabel);
  myForm.appendChild(firstDiv);

  myForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    let location = locationInput.value;
    let info = await callAPI(location);
    displayData(info);
  });

  container.classList.add("w-2/5", "m-3", "mx-auto");
  container.appendChild(myForm);
  body.appendChild(container);
  body.appendChild(display);
}

function displayData(information) {
  let {body} = document;
  let display = document.getElementById("display");
  display.textContent = "";
  let locationName = document.createElement("p");
  let longitude = document.createElement("p");
  let latitude = document.createElement("p");
  let feelsLike = document.createElement("p");
  let humidity = document.createElement("p");
  let clouds = document.createElement("p");
  let wind = document.createElement("p");

  display.classList.add("container", "mx-auto", "my-12", "w-2/5", "text-2xl", "flex", "flex-col", "gap-y-6");

  let locationCountry = new Intl.DisplayNames(["en"], {type: "region"});

  locationName.textContent = `${information.name}, ${locationCountry.of(information.country)}`;
  longitude.textContent = `Longitude: ${information.coordinates.lon}`;
  latitude.textContent = `Latitude: ${information.coordinates.lat}`;
  feelsLike.textContent = `Feels like: ${information.main.feels_like}\u00B0C`;
  humidity.textContent = `Humidity: ${information.main.humidity}%`;
  clouds.textContent = `Clouds: ${information.weather[0].description}`;
  wind.textContent = `Wind speed: ${information.wind.speed} meters/s`;

  display.appendChild(locationName);
  display.appendChild(longitude);
  display.appendChild(latitude);
  display.appendChild(feelsLike);
  display.appendChild(humidity);
  display.appendChild(clouds);
  display.appendChild(wind);
  
  body.appendChild(display);

  let paras = document.querySelectorAll("p");
  for (let para of paras) {
    para.classList.add("pl-9")
  }
  if (information.main.feels_like > 29) {
    body.removeAttribute('class');
    body.classList.add("bg-yellow-400")
  } else if (information.main.feels_like >= 25){
    body.removeAttribute('class');
    body.classList.add("bg-yellow-300")
  } else if (information.main.feels_like >= 20){
    body.removeAttribute('class');
    body.classList.add("bg-yellow-200");
  } else if (information.main.feels_like < 20){
    body.removeAttribute('class');
    body.classList.add("bg-sky-300");
  }
  locationName.classList.add("text-7xl", "text-center", )
  
}

export {displayData, displaySearch};


