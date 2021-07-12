const display = (() => {
  const cityName = document.getElementById("cityName");
  const cityTemp = document.getElementById("cityTemp");
  const cityFeelsLike = document.getElementById("cityFeelsLike");
  const cityHumidity = document.getElementById("cityHumidity");
  const cityWind = document.getElementById("cityWind");
  const weatherSection = document.getElementById("weather-section");
  function setSearchResult(weatherData) {
    weatherSection.style.display = "block";
    cityName.textContent = `${weatherData.cityName}`;
    cityTemp.textContent = `${Math.round(weatherData.temperature)}°F`;
    cityFeelsLike.textContent = `Feels like: ${Math.round(
      weatherData.feelsLike
    )}°F`;
    cityHumidity.textContent = `Humidity: ${weatherData.humidity}%`;
    cityWind.textContent = `Wind: ${weatherData.windSpeed} mph`;
  }
  function changeCelcius(weatherData) {
    const fToCelTemp = ((weatherData.temperature - 32) * 5) / 9;
    const fToCelFeelsLike = ((weatherData.feelsLike - 32) * 5) / 9;

    cityTemp.textContent = `${Math.round(fToCelTemp)}°C`;
    cityFeelsLike.textContent = `Feels like: ${Math.round(fToCelFeelsLike)}°C`;
  }
  return { setSearchResult, changeCelcius };
})();

export default display;
