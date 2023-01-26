document.body.onload = updateClock(); setInterval(updateClock, 1500); updateDate(); weatherDataCall();

function updateClock () {
    let date = new Date()
    let amOrPm = date.getHours() < 12 ? "am" : "pm"
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    let hours = (h) => {
        if (h == 0) {
                return 12
        } else if (h > 0 && h < 13) {
                return h
        } else {
            return h - 12
        }
    }
    document.getElementById("timeDisplay").innerText = `${hours(date.getHours())}:${minutes}${amOrPm}`
}

function updateDate () {
    const currentDate  = new Date();
    const dateDisplay = document.getElementById("dateDisplay");
    const currentMonth = currentDate.getMonth();
    const fullMonthName = () => {
        switch (currentMonth) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";            
        }
    }
    
    dateDisplay.innerText = `${fullMonthName(currentDate.getMonth())} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
}

function weatherDataCall () {
    
    const error = () => {
        const reminderFrequency = 20 //page loads before reminder
        const loadsSinceReminder = JSON.parse(localStorage.getItem("loadsSinceReminder"))

        const locationReminder = () => {
            const modalErrorMessage = document.getElementById("modalErrorMessage")
            showErrorModal("Weather widget is disabled until location permission is granted.")
            localStorage.setItem("loadsSinceReminder", 0)
        }

        const trackLoads = (loads) => {
            if (loads < reminderFrequency) {
                localStorage.setItem("loadsSinceReminder", loads + 1)
            } else {
                locationReminder()
            }
        }

        navigator.permissions.query({name: "geolocation"})
            .then((PermissionStatus) => {
                if (PermissionStatus.state == "prompt") {
                    locationReminder()
                } else if (PermissionStatus.state == "denied") {
                    trackLoads(loadsSinceReminder)
                }
            })
        

        // Removes user weather and weather options if weather data isn't available
        document.getElementById("weatherSettings").classList.add("hidden-element")
        document.getElementById("weatherWidget").classList.add("hidden-element")

        // Removes weather data from previous load if there is any
        localStorage.removeItem("weatherDescription")
        localStorage.removeItem("currentTemp")
    }

    const success = (position) => {
        // Gives user weather and weather options if weather data is available
        document.getElementById("weatherSettings").classList.remove("hidden-element")
        document.getElementById("weatherWidget").classList.remove("hidden-element")
        
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`)
            .then((response) => response.json())
            .then((data) => {
                const weatherCode = data.current_weather.weathercode
                const currentTemp = Math.trunc(data.current_weather.temperature)
                
                const weathercodeToDescription = () => { 
                    switch (weatherCode) {
                        case 0: 
                            return "Clear sky."
                        case 1:
                            return "Mainly clear."
                        case 2:
                            return "Partly cloudy."
                        case 3:
                            return "Overcast."
                        case 45: 
                            return "Fog."
                        case 48:
                            return "Freezing fog."
                        case 51:
                            return "Light drizzle."
                        case 53:
                            return "Moderate drizzle."
                        case 55:
                            return "Heavy drizzle."
                        case 56: 
                            return "Light freezing drizzle."
                        case 57:
                            return "Heavy freezing drizzle."
                        case 61:
                            return "Light rain."
                        case 63:
                            return "Rain."
                        case 65:
                            return "Heavy rain."
                        case 66:
                            return "Freezing rain."
                        case 67: 
                            return "Heavy freezing rain."
                        case 71:
                            return "Light snow."
                        case 73:
                            return "Snow."
                        case 75: 
                            return "Heavy snow."
                        case 77:
                            return "Snow grains."
                        case 80:
                            return "Light rain showers."
                        case 81:
                            return "Rain showers."
                        case 82:
                            return "Violent rain showers."
                        case 85:
                            return "Slight snow showers."
                        case 86:
                            return "Heavy snow showers."
                        case 95:
                            return "Thunderstorms."
                    }}
                
                // Removes error handling marker
                localStorage.removeItem("loadsSinceReminder")
                
                localStorage.setItem("weatherDescription", weathercodeToDescription())
                localStorage.setItem("currentTemp", currentTemp);
                updateWeatherDisplay()
            })}

    navigator.geolocation.getCurrentPosition(success, error);
}
