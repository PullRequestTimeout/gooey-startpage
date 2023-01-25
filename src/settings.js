// Background Image Select ------------------------------------------------------------------------

const changeBackground = () => {
    const bgImg = document.getElementById("backgroundImage");
    const bgList = document.getElementsByName("bgselect");
    
    for (i = 0; i < bgList.length; i++) {
        if (bgList[i].checked){
            bgImg.setAttribute("src", `assets/${bgList[i].value}.jpg`)
            localStorage.setItem("backgroundImage", bgList[i].value);
        }
    }
}

document.getElementsByName("bgselect").forEach(element => element.addEventListener("input", changeBackground));

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
    const html = document.querySelector("html");
    const fontSelected = document.getElementsByName("fontselect");
    const fonts = ["roboto", "montserrat", "adventpro", "exo"]

    for (i = 0; i < fontSelected.length; i++) {
        if (fontSelected[i].checked){
            const notValue = fonts.filter(font => font !== fontSelected[i].value);

            html.classList.add(fontSelected[i].value);
            html.classList.remove(notValue[0], notValue[1], notValue[2]);

            localStorage.setItem("font", fontSelected[i].value);
        }
    }
}

document.getElementsByName("fontselect").forEach(element => element.addEventListener("input", changeFont));


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
}

document.getElementById("searchselect-google").addEventListener("click", searchSelect);
document.getElementById("searchselect-ddg").addEventListener("click", searchSelect);

// Toggle Temp Units ------------------------------------------------------------------------------

const updateTempUnits = () => {
    const currentTempValue = localStorage.getItem("currentTemp")
    const currentTempDisplay = document.getElementById("currentTempDisplay")
    const tempUnitDisplay = document.getElementById("tempUnitDisplay")
    const tempUnitToggle = document.getElementById("tempUnitToggle")

    if (tempUnitToggle.checked == true) {
        localStorage.setItem("tempUnit", "fahr")
        currentTempDisplay.innerText = `The temperature is ${Math.trunc(currentTempValue * 9/5 + 32)}°F.`
        tempUnitDisplay.innerText = "Celsius"
    } else if (tempUnitToggle.checked == false) {
        localStorage.setItem("tempUnit", "cels")
        currentTempDisplay.innerText = `The temperature is ${currentTempValue}°C.`
        tempUnitDisplay.innerText = "Fahrenheit"
    }
}

document.getElementById("tempUnitToggle").addEventListener("change", updateTempUnits)

// Hide Weather Widget ----------------------------------------------------------------------------

const toggleHideWeather = () => {
    const hideWeatherToggle = document.getElementById("hideWeather");
    const weatherWidget = document.getElementById("weatherWidget");
    const hideWeatherLabel = document.getElementById("hideWeatherLabel");

    if (hideWeatherToggle.checked == true) {
        weatherWidget.classList.add("hidden-element");
        hideWeatherLabel.innerText = "Show";
        localStorage.setItem("hideWeather", "true");
    } else if (hideWeatherToggle.checked == false) {
        weatherWidget.classList.remove("hidden-element");
        hideWeatherLabel.innerText = "Hide";
        localStorage.setItem("hideWeather", "false");
    }
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
    }
}

document.getElementById("hideLinks").addEventListener("click", toggleHideLinks);

// Load State -------------------------------------------------------------------------------------

const loadState = () => {
    const loadBGState = () => {
        const backgroundImageState = localStorage.getItem("backgroundImage");
        const bgImg = document.getElementById("backgroundImage");
    
        switch (backgroundImageState){
            case null:
            case "img1": 
                bgImg.setAttribute("src", "/assets/img1.jpg");
                document.getElementById("bgselect-img1").checked = true;
                changeBackground();
                break;
            case "img2":
                bgImg.setAttribute("src", "/assets/img2.jpg");
                document.getElementById("bgselect-img2").checked = true;
                changeBackground();
                break;
            case "img3":
                bgImg.setAttribute("src", "/assets/img3.jpg");
                document.getElementById("bgselect-img3").checked = true;
                changeBackground();
                break;
            case "img4":
                bgImg.setAttribute("src", "/assets/img4.jpg");
                document.getElementById("bgselect-img4").checked = true;
                changeBackground();
                break;
        }
    }
    
    const loadBlurValue = () => {
        switch (localStorage.getItem("blurValue")){
            case null:
                document.getElementById("backgroundImage").style["filter"] = `blur(0.25em)`
                localStorage.setItem("blurValue", "0.25")
                document.getElementById("bgblur").value = "0.25"
                break;
            default:
                document.getElementById("backgroundImage").style["filter"] = `blur(${localStorage.getItem("blurValue")}em)`
                document.getElementById("bgblur").value = localStorage.getItem("blurValue")
                break;
        };
    }
    
    const loadBrightValue = () => {
        switch (localStorage.getItem("brightValue")){
            case null:
                document.getElementById("backgroundImage").style["opacity"] = "1";
                localStorage.setItem("brightValue", "1");
                document.getElementById("bgbrightness").value = "1"
                break;
            default:
                document.getElementById("backgroundImage").style["opacity"] = localStorage.getItem("brightValue");
                document.getElementById("bgbrightness").value = localStorage.getItem("brightValue");
                break;
        }
    }
    
    const loadSearchOption = () => {
        switch (localStorage.getItem("search")){
            case null:
            case "google":
                document.getElementById("searchselect-google").checked = true;
                break;
            case "ddg":
                document.getElementById("searchselect-ddg").checked = true;
                break;
        }
    }
    
    const loadWeatherDisplay = () => {
        if (localStorage.getItem("hideWeather") == "true") {
            document.getElementById("hideWeather").checked = true;
            toggleHideWeather();
        } else if (localStorage.getItem("hideWeather") == "false") {
            document.getElementById("hideWeather").checked = false;
            toggleHideWeather();
        }
    }
    
    const loadTempUnits = () => {
        const tempUnits = localStorage.getItem("tempUnit")
        const tempUnitToggle = document.getElementById("tempUnitToggle")
        if (tempUnits == "fahr") {
            tempUnitToggle.checked = true
            updateTempUnits()
        }
    }

    const loadLinkDisplay = () => {
        if (localStorage.getItem("hideLinks") == "true") {
            document.getElementById("hideLinks").checked = true;
            toggleHideLinks();
        } else if (localStorage.getItem("hideLinks") == "false") {
            document.getElementById("hideLinks").checked = false;
            toggleHideLinks();
        }
    }
    
    const loadFontSelection = () => {
        if (localStorage.getItem("font") == null) {
            document.getElementById(`fontselect-roboto`).checked = true;
            changeFont();
        } else {
            document.getElementById(`fontselect-${localStorage.getItem("font")}`).checked = true;
            changeFont();
        }
    }

    // Retains background image selection
    loadBGState();
    
    // Retains background style choices and settings range input
    loadBlurValue();
    loadBrightValue();

    // Retains search option choice
    loadSearchOption();

    // Load temp unit choice
    loadTempUnits()

    // Retains weather display choice
    loadWeatherDisplay();

    // Retains links display choice
    loadLinkDisplay();

    // Retains font if previously set, otherwise defaults to Roboto
    loadFontSelection()
}

// Boot -------------------------------------------------------------------------------------------

document.body.onload = loadState();