const apiKey = "f2cb17b1c89e33c7662c0f32c4919cb1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jaela";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    
}
checkWeather();