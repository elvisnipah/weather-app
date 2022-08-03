function displayData() {
  let {body} = document;
  let display = document.createElement("div");
  let locationName = document.createElement("p");
  let longitude = document.createElement("p");
  let latitude = document.createElement("p");
  let feelsLike = document.createElement("p");
  let humidity = document.createElement("p");
  let clouds = document.createElement("p");
  let wind = document.createElement("p");

  display.classList.add("mx-auto", "mt-6", "w-2/5", "text-2xl", "flex", "flex-col", "items-center");
  locationName.textContent = "Location: Accra";
  longitude.textContent = "Longitude: -0.1969";
  latitude.textContent = "Latitude: 5.556";
  feelsLike.textContent = "Feels like: 26.23\u00B0C";
  humidity.textContent = "Humidity: 69%";
  clouds.textContent = "Clouds: few clouds";
  wind.textContent = "Wind speed: 5.6m/s";


  display.appendChild(locationName);
  display.appendChild(longitude);
  display.appendChild(latitude);
  display.appendChild(feelsLike);
  display.appendChild(humidity);
  display.appendChild(clouds);
  display.appendChild(wind);

  body.appendChild(display);
}

export {displayData};


