import './style.css';

let {body} = document;
let container = document.createElement("div");
let myForm = document.createElement("form");
let locationLabel = document.createElement("label");
let firstDiv = document.createElement("div");
let secondDiv = document.createElement("div");
let locationInput = document.createElement("input");
let submitBtn = document.createElement("button");

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

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let location = locationInput.value;
  callAPI(location);
});

container.classList.add("w-2/5", "m-3", "mx-auto");
container.appendChild(myForm);
body.appendChild(container);


async function callAPI(location) {
  let apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3d7a4b39c8f2786fe333b4d256ce0134&units=metric`);
  let jsonData = await apiData.json();
  let finalData = processData(jsonData);
  console.log(finalData);
  return finalData;
};

function processData(data) {
  let processedData = {
    coordinates: data.coord,
    main: data.main,
    name: data.name,
    weather: data.weather,
    wind: data.wind
  };
  return processedData;
}

callAPI("Accra");
