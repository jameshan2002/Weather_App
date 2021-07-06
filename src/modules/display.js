const display = (() => {
  const cityName = document.getElementById("cityName");
  const cityTemp = document.getElementById("cityTemp");
  const cityFeelsLike = document.getElementById("cityFeelsLike");
  const cityHumidity = document.getElementById("cityHumidity");
  const cityWind = document.getElementById("cityWind");
  function setSearchResult(weatherData) {
    cityName.textContent = `${weatherData.cityName}`;
    cityTemp.textContent = `${Math.round(weatherData.temperature)}°F`;
    cityFeelsLike.textContent = `Feels like: ${Math.round(
      weatherData.feelsLike
    )}°F`;
    cityHumidity.textContent = `Humidity: ${weatherData.humidity}%`;
    cityWind.textContent = `Wind: ${weatherData.windSpeed} mph`;
  }
  return { setSearchResult };
})();

export default display;
