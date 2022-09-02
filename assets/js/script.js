var cities =[];

var cityFormEl = document.querySelector("#city-search-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forcastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");


var formSumbitHandler = function(event){
  event.preventDefaul();
  var city = cityInputEl.ariaValueMax.trim();
  if(city){
    getCityWeather(city);
    get5Day(city);
    cities.unshift({city});
    cityInputEl.value = "";
  } else{
    alert("Please enter a city");
  }
  saveSearch();
  pastSearch();
}

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};

var getCityWeather = function(city) {
    var apiKey = "ab7f1ffdbd4f0049725ff49516e7726b"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data,city);
        });
    });
};

var displayWeather = function(weather, searchCity){
    //clear data
    weatherContainerEl.textContent="";
    citySearchInputEl.textContent;

    //test 
    console.log(weather);
}


