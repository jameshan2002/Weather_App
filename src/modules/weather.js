export default (function () {
  const API_KEY = "bca923c46f8daa20814a16befa473c41";
  const citySearchInput = document.querySelector("#city-search");
  const citySearchButton = document.querySelector("#city-search-button");

  function cityWeather(event) {
    event.preventDefault;
    const name = citySearchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;
    citySearchInput.value = null;
    console.log(url);
  }

  citySearchButton.addEventListener("submit", cityWeather);

  const loadWeather = () => {};

  return {
    loadWeather,
  };
})();
