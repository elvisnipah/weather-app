import './style.css';

async function callAPI(location) {
  let apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3d7a4b39c8f2786fe333b4d256ce0134`);
  let jsonData = await apiData.json();
  console.log(jsonData);
};

callAPI("Accra");