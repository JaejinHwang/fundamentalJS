const API_KEY = "a3de7b34c106c8a757e6e6441a4caee8";

function handleSearchSuccess (info) {
    const latitude = info.coords.latitude;
    const longitude = info.coords.longitude;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const weatherArea = document.querySelector("#weather span:first-child");
            const cityArea = document.querySelector("#weather span:last-child");
            cityArea.innerText = `${data.name}, ${data.sys.country}`;
            weatherArea.innerText = `${data.weather[0].main}, ${data.main.temp}°C | `;
        });
}

function handleSearchError () {
    alert("Your location cannot be found. Please check your internet status.");
}

navigator.geolocation.getCurrentPosition(handleSearchSuccess, handleSearchError);