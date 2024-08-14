const apiKey = "f2cb17b1c89e33c7662c0f32c4919cb1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_display = document.querySelector(".weather");
const error_display = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    if (response.status == 404 ) {
        error_display.style.display = "block";
    }
    else{
        var data = await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-icon").src = `images/${data.weather[0].main}.png`;

        weather_display.style.display = "block";
    }

}
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);

})
