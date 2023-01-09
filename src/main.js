// My Ugly Ass Clock Function That Needs Rewriting ------------------------------------------------
// Maybe I should keep it though, it was my first ever function, 
// copy and pasted from a previous project.
// And it's kinda like... it's so ugly it's actually beautiful?

const updateClock = () => {

    const timeDisplay = document.getElementById("timeDisplay");
    const currentTime = new Date();
    // I hate 24hr time, so here we go.
    if (currentTime.getHours() > 12 && currentTime.getMinutes() >= 10){
        timeDisplay.innerText = `${currentTime.getHours() - 12}:${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() > 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `${currentTime.getHours() - 12}:0${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() < 12 && currentTime.getMinutes() >= 10){
        timeDisplay.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() < 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `${currentTime.getHours()}:0${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 0 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `12:0${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 0 && currentTime.getMinutes() >= 10){
        timeDisplay.innerText = `12:${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 12 && currentTime.getMinutes() >= 10){
        timeDisplay.innerText = `12:${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() == 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `12:0${currentTime.getMinutes()}pm`;
    }
};

// Date Display -----------------------------------------------------------------------------------

const updateDate = () => {
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



// Weather API Call -------------------------------------------------------------------------------

const weatherDataCall = () =>{
    
    const error = () => {
        alert("You have not given location permissions to this website.")
    }

    const success = (position) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=464f77339fb17e890968824a382be54b&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                const weatherDescription = data.weather[0].description;
                localStorage.setItem("currentTemp", Math.trunc(data.main.temp));
                const weatherDescriptionDisplay = document.getElementById("weatherDescription");

                // Regex in following line capitalises first letter in a string.
                weatherDescriptionDisplay.innerText = `${weatherDescription.replace(/^\w/, (c) => c.toUpperCase())}.`;
                updateTempUnits();
            })}

    navigator.geolocation.getCurrentPosition(success, error);
}

// Boot -------------------------------------------------------------------------------------------

document.body.onload = updateClock(); updateDate(); setInterval(updateClock, 500); weatherDataCall();
