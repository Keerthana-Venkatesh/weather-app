const apiKey = "084aefd328aeab3d709ff901e011cf25"; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('search');
const cityInput = document.getElementById('city');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  weatherResult.classList.remove('hidden');
  cityName.textContent = `Weather in ${data.name}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Description: ${data.weather[0].description}`;
}