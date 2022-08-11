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
    }};

// Date Display -------------------------------------------------------------

const updateDate = () => {
    const currentDate  = new Date();
    
}

// Settings -----------------------------------------------------------------

// Settings Panel Animation

const translateSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("display-settings");
}

document.getElementById("settingsIcon").addEventListener("click", translateSettingsPanel)

// Background Image Select

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

// Background Brightness Slider -------------------------------------------------

const changeBgBrightness = () => {
    const brightnessSlider = document.getElementById("bgbrightness");

    document.getElementById("backgroundImage").style["opacity"] = brightnessSlider.value;
    localStorage.setItem("brightValue", brightnessSlider.value)
}

// Load State -------------------------------------------------------------------

const loadState = () => {
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
    document.getElementById("backgroundImage").style["filter"] = `blur(${localStorage.getItem("blurValue")}em)`;
    document.getElementById("backgroundImage").style["opacity"] = localStorage.getItem("brightValue");
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
                const currentTempValue = Math.trunc(data.main.temp);
                // document.getElementById("weatherDescription").innerText = `${weatherDescription.replace(/^\w/, (c) => c.toUpperCase())}.`;

                // Sets Current Location Text
                // document.getElementById("currentLocationDisplay").innerText = data.name;

                // Sets the temp display
                
                
                localStorage.setItem("currentTemp", currentTempValue);

                document.getElementById("weatherDescription").innerText = `${weatherDescription.replace(/^\w/, (c) => c.toUpperCase())}. The temperature is ${currentTempValue}°C.`
                
                // const tempUnitToggle = document.getElementById("tempUnitToggle");
                // document.getElementById("tempDisplay").innerText = `${currentTempValue}°C.`;

                // if (tempUnitToggle.checked == true) {
                //     document.getElementById("currentTempDisplay").innerText = Math.trunc(currentTempValue * 9/5 + 32) + "°F";
                // } else if (tempUnitToggle.checked == false) {
                //     document.getElementById("currentTempDisplay").innerText = currentTempValue + "°C";
                // }
                

            })}

    navigator.geolocation.getCurrentPosition(success, error);
}