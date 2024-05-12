function getWeather() {
  const apiKey = "f245897b83f9cfcbe0716e8a0795eea9";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a City");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      result.innerHTML = `
      <img id="Icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" class="weather-icon" alt="Weather Icon">
      <div  class="temp">${Math.round(data.main.temp - 273.15)}ºc</div>
      <div class="weather-info">${data.weather[0].description}</div>     
      `;

      /*   const temperatureHTML = 
              <p>{temperature}°C</p>
              ;
      
            const weatherHTML = 
              <p>{cityName}°C</p>
              <p>{description}°C</p>
              ;
      
            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfoDiv.innerHTML = weatherHTML;
            weatherIcon.src = iconUrl; */
      /*  desc.innerHTML = description; */
    });
  /*   fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.list);
      })
      .catch((error) => {
        console.error("Error fetching current weather data:", error);
        alert("Error fetching current weather data. please try again.");
      }); */
}

/*   function displayWeather(data) {
    const tempDivInfo = document.getElementById("temp-div");
    const weatherInfoDiv = document.getElementById("weather-info");
    const weatherIcon = document.getElementById("weather-icon");
    const hourlyForecastDiv = document.getElementById("hourly-forecast");

    //clearing previous content
    weatherInfoDiv.innerHTML = "";
    hourlyForecastDiv.innerHTML = "";
    tempDivInfo.innerHTML = "";
  } */

/* function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
} */
