document.addEventListener("DOMContentLoaded", () => {
  let getbtn = document.getElementById("get_weather_btn");
  let cityInput = document.getElementById("city-input");
  let wetherInfo = document.getElementById("weather-info");
  let cityName = document.getElementById("city-name");
  let temperature = document.getElementById("temperature");
  let discreption = document.getElementById("description");
  let errorCity = document.getElementById("error-city");

  const API_KEY = "d09f56793b0c2cd759f6631dd460d0d6";

  getbtn.addEventListener("click", async () => {
    let city = cityInput.value.trim();
    if (city === "") {
      alert("Please enter city");
      return;
    }

    try {
      let weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      console.error("Error:", error);
      showError();
    }

    cityInput.value = "";
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityName.textContent = name;
    temperature.textContent = `Temperature: ${main.temp}°C`;
    discreption.textContent = `Weather: ${weather[0].description}`;

    wetherInfo.classList.remove("hidden");
    errorCity.classList.add("hidden");
  }

  function showError() {
      wetherInfo.classList.add("hidden");
      errorCity.classList.remove("hidden");
  }
});
