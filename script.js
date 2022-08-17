// My Ugly Ass Clock Function That Needs Rewriting ---------------------------
const updateClock = () => {

    const timeDisplay = document.getElementById("timeDisplay");
    const currentTime = new Date();
    // I hate 24hr time
    if (currentTime.getHours() > 12 && currentTime.getMinutes() > 10){
        timeDisplay.innerText = `${currentTime.getHours() - 12}:${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() > 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `${currentTime.getHours() - 12}:0${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() < 12 && currentTime.getMinutes() > 10){
        timeDisplay.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() < 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `${currentTime.getHours()}:0${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 0 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `12:0${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 0 && currentTime.getMinutes() > 10){
        timeDisplay.innerText = `12:${currentTime.getMinutes()}am`;
    } else if (currentTime.getHours() == 12 && currentTime.getMinutes() > 10){
        timeDisplay.innerText = `12:${currentTime.getMinutes()}pm`;
    } else if (currentTime.getHours() == 12 && currentTime.getMinutes() < 10){
        timeDisplay.innerText = `12:0${currentTime.getMinutes()}pm`;
    }
};

// Date Display -------------------------------------------------------------

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

// Settings -----------------------------------------------------------------

// Settings Panel Animation

const translateSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("display-settings");
}

const closeSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    if (settingsPanel.classList[1] == "display-settings") {
        translateSettingsPanel();
    }
};

document.querySelector("main").addEventListener("click", closeSettingsPanel);
document.getElementById("settingsIcon").addEventListener("click", translateSettingsPanel);

// Background Image Select ---------------------------------------------------

// Needs to be refactored into a function that retrieves the value of each radio input
// Inputs value into innerHTML template literal

const bgImg = document.getElementById("backgroundImage")

document.getElementById("bgselect-img1").onclick = function(){
    bgImg.setAttribute("src", "assets/img1.jpg");
    localStorage.setItem("backgroundImage", "img1");
}

document.getElementById("bgselect-img2").onclick = function(){
    bgImg.setAttribute("src", "assets/img2.jpg");
    localStorage.setItem("backgroundImage", "img2");
}

document.getElementById("bgselect-img3").onclick = function(){
    bgImg.setAttribute("src", "assets/img3.jpg");
    localStorage.setItem("backgroundImage", "img3");
}

document.getElementById("bgselect-img4").onclick = function(){
    bgImg.setAttribute("src", "assets/img4.jpg");
    localStorage.setItem("backgroundImage", "img4");
}

// Background Blur Slider -------------------------------------------------------

const changeBgBlur = () => {
    const blurSlider = document.getElementById("bgblur");
    document.getElementById("backgroundImage").style["filter"] = `blur(${blurSlider.value}em)`;
    localStorage.setItem("blurValue", blurSlider.value)
}

document.getElementById("bgblur").addEventListener("input", changeBgBlur)

// Background Brightness Slider -------------------------------------------------

const changeBgBrightness = () => {
    const brightnessSlider = document.getElementById("bgbrightness");
    document.getElementById("backgroundImage").style["opacity"] = brightnessSlider.value;
    localStorage.setItem("brightValue", brightnessSlider.value)
}

document.getElementById("bgbrightness").addEventListener("input", changeBgBrightness)
// Search Select ----------------------------------------------------------------

const searchSelect = () => {
    const searchSelectGoogle = document.getElementById("searchselect-google");
    const searchSelectDDG = document.getElementById("searchselect-ddg");
    const searchString = document.getElementById("searchString");

    if (searchSelectGoogle.checked == true){
        searchString.setAttribute("action", "https://www.google.com/search?");
        localStorage.setItem("search", "google");
    } else if (searchSelectDDG.checked == true){
        searchString.setAttribute("action", "https://duckduckgo.com/?");
        localStorage.setItem("search", "ddg");
    }
};

document.getElementById("searchselect-google").addEventListener("click", searchSelect);
document.getElementById("searchselect-ddg").addEventListener("click", searchSelect);

// Toggle Weather ---------------------------------------------------------------

const updateTempUnits = () => {
    const currentTempValue = localStorage.getItem("currentTemp");
    const currentTempDisplay = document.getElementById("currentTempDisplay");
    const tempUnitDisplay = document.getElementById("tempUnitDisplay");

    if (tempUnitToggle.checked == true) {
        localStorage.setItem("tempUnit", "fahr");
        currentTempDisplay.innerText = `The temperature is ${Math.trunc(currentTempValue * 9/5 + 32)}°F.`;
        tempUnitDisplay.innerText = "Celcius";
    } else if (tempUnitToggle.checked == false) {
        localStorage.setItem("tempUnit", "celc");
        currentTempDisplay.innerText = `The temperature is ${currentTempValue}°C.`;
        tempUnitDisplay.innerText = "Fahrenheit";
    }
};

document.getElementById("tempUnitToggle").addEventListener("change", updateTempUnits)

// Hide Element -----------------------------------------------------------------

// const toggleHide = () => {
// }



// Load State -------------------------------------------------------------------

// This funtion calls a global variable, which is bad practice.
// Refactor Background Image Select into function, and move the variable in that section into this function

const loadState = () => {
    // Retains background image selection
    const backgroundImageState = localStorage.getItem("backgroundImage");
    switch (backgroundImageState){
        case "img1": 
            bgImg.setAttribute("src", "/assets/img1.jpg");
            break;
        case "img2":
            bgImg.setAttribute("src", "/assets/img2.jpg");
            break;
        case "img3":
            bgImg.setAttribute("src", "/assets/img3.jpg");
            break;
        case "img4":
            bgImg.setAttribute("src", "/assets/img4.jpg");
            break;
    };

    // Retains background style choices and settings range input
    document.getElementById("backgroundImage").style["filter"] = `blur(${localStorage.getItem("blurValue")}em)`;
    document.getElementById("bgblur").value = localStorage.getItem("blurValue");

    document.getElementById("backgroundImage").style["opacity"] = localStorage.getItem("brightValue");
    document.getElementById("bgbrightness").value = localStorage.getItem("brightValue");

    // Retains search option choice
    if (localStorage.getItem("search") == "google") {
        document.getElementById("searchselect-google").checked = true;
    } else if (localStorage.getItem("search") == "ddg") {
        document.getElementById("searchselect-ddg").checked = true;
    }


};

// Weather API Call -------------------------------------------------------------

const weatherDataCall = () =>{
    
    const error = () => {
        alert("You have not given location permissions to this website.")
    }

    const success = (position) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=464f77339fb17e890968824a382be54b&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const weatherDescription = data.weather[0].description;
                localStorage.setItem("currentTemp", Math.trunc(data.main.temp));
                const weatherDescriptionDisplay = document.getElementById("weatherDescription");

                weatherDescriptionDisplay.innerText = `${weatherDescription.replace(/^\w/, (c) => c.toUpperCase())}.`;
                updateTempUnits();
            })}

    navigator.geolocation.getCurrentPosition(success, error);
}

// Boot -------------------------------------------------------------------------

document.body.onload = updateClock(); updateDate(); setInterval(updateClock, 500); loadState(); weatherDataCall();