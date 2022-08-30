// My Ugly Ass Clock Function That Needs Rewriting ------------------------------------------------
const updateClock = () => {

    const timeDisplay = document.getElementById("timeDisplay");
    const currentTime = new Date();
    // I hate 24hr time
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

// Settings ---------------------------------------------------------------------------------------

// Settings Panel Animation

const translateSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("display-settings");
}

const rotateSettingsIcon = () => {
    const settingsIconCheckbox = document.getElementById("settings");
    const settingsPanel = document.getElementById("settingsPanel");
    settingsIconCheckbox.checked == true && settingsPanel.classList[1] == "display-settings" ? settingsIconCheckbox.checked = false : settingsIconCheckbox.checked = true;
}

const closeSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    if (settingsPanel.classList[1] == "display-settings") {
        translateSettingsPanel();
    }
};

const translateLinksPanel = () => {
    const editLinksPanel = document.getElementById("editLinksPanel");
    editLinksPanel.classList.add("display-settings");
    translateSettingsPanel();
};

const closeLinksPanel = () => {
    const editLinksPanel = document.getElementById("editLinksPanel");
    editLinksPanel.classList.remove("display-settings");
    
};

document.getElementById("closeLinkEditPanel").addEventListener("click", closeLinksPanel);
document.getElementById("closeLinkEditPanel").addEventListener("click", translateSettingsPanel);
document.getElementById("openLinksPanel").addEventListener("click", translateLinksPanel);
document.querySelector("main").addEventListener("click", closeLinksPanel);
document.querySelector("main").addEventListener("click", closeSettingsPanel);
document.querySelector("main").addEventListener("click", rotateSettingsIcon);
document.getElementById("settingsIcon").addEventListener("click", translateSettingsPanel);

// Background Image Select ------------------------------------------------------------------------

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

// Background Blur Slider -------------------------------------------------------------------------

const changeBgBlur = () => {
    const blurSlider = document.getElementById("bgblur");
    document.getElementById("backgroundImage").style["filter"] = `blur(${blurSlider.value}em)`;
    localStorage.setItem("blurValue", blurSlider.value)
}

document.getElementById("bgblur").addEventListener("input", changeBgBlur)

// Background Brightness Slider -------------------------------------------------------------------

const changeBgBrightness = () => {
    const brightnessSlider = document.getElementById("bgbrightness");
    document.getElementById("backgroundImage").style["opacity"] = brightnessSlider.value;
    localStorage.setItem("brightValue", brightnessSlider.value)
}

document.getElementById("bgbrightness").addEventListener("input", changeBgBrightness)

// Font Select -----------------------------------------------------------------------------------

const changeFont = () => {
    const fontElements =  document.querySelectorAll("h1, h2, h3, p, input, button, label, li, a");
    const fontSelected = document.getElementsByName("fontselect");
    const fonts = ["roboto", "montserrat", "adventpro", "exo"]

    for (i = 0; i < fontSelected.length; i++) {
        if (fontSelected[i].checked){
            const notValue = fonts.filter(font => font !== fontSelected[i].value);
            // console.log(notValue[0], notValue[1], notValue[2]);

            fontElements.forEach(element => element.classList.add(fontSelected[i].value));
            fontElements.forEach(element => element.classList.remove(notValue[0], notValue[1], notValue[2]));
            
            // fontElements.classList.remove(notValue.toString());
            localStorage.setItem("font", fontSelected[i].value)
        };
    }
};

document.getElementsByName("fontselect").forEach(element => element.addEventListener("input", changeFont));
// document.getElementsByName("fontselect").forEach(element => element.addEventListener("change", changeFont));

// Search Select ----------------------------------------------------------------------------------

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

// Toggle Weather ---------------------------------------------------------------------------------

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

document.getElementById("tempUnitToggle").addEventListener("change", updateTempUnits);

// Hide Weather Widget ----------------------------------------------------------------------------

const toggleHideWeather = () => {
    const hideWeatherToggle = document.getElementById("hideWeather");
    const weatherWidget = document.getElementById("weatherWidget");
    const hideWeatherLabel = document.getElementById("hideWeatherLabel");

    if (hideWeatherToggle.checked == true) {
        weatherWidget.classList.add("transparent-element");
        hideWeatherLabel.innerText = "Show";
        localStorage.setItem("hideWeather", "true");
    } else if (hideWeatherToggle.checked == false) {
        weatherWidget.classList.remove("transparent-element");
        hideWeatherLabel.innerText = "Hide";
        localStorage.setItem("hideWeather", "false");
    };
}

document.getElementById("hideWeather").addEventListener("click", toggleHideWeather);

// Hide QuickLinks Widget -------------------------------------------------------------------------

const toggleHideLinks = () => {
    const hideLinksToggle = document.getElementById("hideLinks");
    const linksWidget = document.getElementById("linksWidget");
    const hideLinksLabel = document.getElementById("hideLinksLabel");

    if (hideLinksToggle.checked == true) {
        linksWidget.classList.add("hidden-element");
        hideLinksLabel.innerText = "Show";
        localStorage.setItem("hideLinks", "true");
    } else if (hideLinksToggle.checked == false) {
        linksWidget.classList.remove("hidden-element");
        hideLinksLabel.innerText = "Hide";
        localStorage.setItem("hideLinks", "false");
    };
}

document.getElementById("hideLinks").addEventListener("click", toggleHideLinks);

// Load State -------------------------------------------------------------------------------------

// This funtion calls a global variable, which is bad practice.
// Refactor Background Image Select into function, and move the variable in that section into this function

const loadState = () => {
    // Retains background image selection
    const backgroundImageState = localStorage.getItem("backgroundImage");
    switch (backgroundImageState){
        case "img1": 
            bgImg.setAttribute("src", "/assets/img1.jpg");
            document.getElementById("bgselect-img1").checked = true;
            break;
        case "img2":
            bgImg.setAttribute("src", "/assets/img2.jpg");
            document.getElementById("bgselect-img2").checked = true;
            break;
        case "img3":
            bgImg.setAttribute("src", "/assets/img3.jpg");
            document.getElementById("bgselect-img3").checked = true;
            break;
        case "img4":
            bgImg.setAttribute("src", "/assets/img4.jpg");
            document.getElementById("bgselect-img4").checked = true;
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
    };

    // Retains weather display choice
    if (localStorage.getItem("hideWeather") == "true") {
        document.getElementById("hideWeather").checked = true;
        toggleHideWeather();
    } else if (localStorage.getItem("hideWeather") == "false") {
        document.getElementById("hideWeather").checked = false;
        toggleHideWeather();
    };

    // Retains links display choice
    if (localStorage.getItem("hideLinks") == "true") {
        document.getElementById("hideLinks").checked = true;
        toggleHideLinks();
    } else if (localStorage.getItem("hideLinks") == "false") {
        document.getElementById("hideLinks").checked = false;
        toggleHideLinks();
    };

    // Retains font
    if (localStorage.getItem("font") == null) {
        localStorage.setItem("font", "roboto");
    } else {
        document.getElementById(`fontselect-${localStorage.getItem("font")}`).checked = true;
        changeFont();
    };
};

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

document.body.onload = updateClock(); updateDate(); setInterval(updateClock, 500); loadState(); weatherDataCall();
