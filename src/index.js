import weather from "./modules/weather.js";
import display from "./modules/display.js";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const tempChange = document.getElementById("temperture-change");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await weather.cityWeather(searchInput.value);
  tempChange.checked = false;
  tempChange.addEventListener("click", () => {
    if (tempChange.checked === false) {
      display.setSearchResult(weatherData);
    } else {
      display.changeCelcius(weatherData);
    }
  });

  display.setSearchResult(weatherData);
});
