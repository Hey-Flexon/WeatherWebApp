// Default city name
const defaultCity = "Enter a city name";

// Function to fetch weather data
async function checkWeather(city) {
    if (!city) {
        // If city is undefined or empty, set it to the default city name
        city = defaultCity;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        // Display error if city not found
        errorDiv.style.display = "block";
        weatherDiv.style.display = "none";
        // Set other details to "00"
        document.querySelector(".temp").innerHTML = "00°C";
        document.querySelector(".humidity").innerHTML = "00%";
        document.querySelector(".wind").innerHTML = "00 km/h";
        return; // Exit the function early to prevent further execution
    }

    // Hide error and display weather information
    errorDiv.style.display = "none";
    weatherDiv.style.display = "block";

    // Parse weather data
    const data = await response.json();

    // Update weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp ? Math.round(data.main.temp) + "°C" : "00°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity ? data.main.humidity + "%" : "00%";
    document.querySelector(".wind").innerHTML = data.wind.speed ? data.wind.speed + " km/h" : "00 km/h";

    // Update weather icon
    switch (data.weather[0].main) {
        // Handle different weather conditions
    }
}

// Call checkWeather function initially without passing any city
checkWeather("");
