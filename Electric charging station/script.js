const apiKey = "cfca9192d925ae310571b03ed85c959d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "% Humidity";
    document.querySelector(".speed").innerHTML = Math.round(data.wind.speed) + "Km/hr";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
}
    btn.addEventListener("click" ,() => {
    checkWeather(input.value);
    })
checkWeather();