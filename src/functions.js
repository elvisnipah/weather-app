async function callAPI(location) {
  let apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3d7a4b39c8f2786fe333b4d256ce0134&units=metric`);
  let jsonData = await apiData.json();
  let finalData = processData(jsonData);
  return finalData;
};

function processData(data) {
  let processedData = {
    coordinates: data.coord,
    main: data.main,
    name: data.name,
    weather: data.weather,
    wind: data.wind,
    country: data.sys.country
  };
  return processedData;
}

export {callAPI};