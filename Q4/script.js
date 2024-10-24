//This will not work if my key gets deactivated but does work at the moment
function getWeather() {
    const city = document.getElementById('usersCity').value;
    const apiKey = '54c3e26ab9e72f11fe43ff5d391f5c27';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Description: ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp/10}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
        });
}