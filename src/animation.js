// Settings Panel Animation -----------------------------------------------------------------------

const translateSettingsPanel = () => {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("display-settings");
    dynamicTabIndex();
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
    dynamicTabIndex();
};

const translateLinksPanel = () => {
    const editLinksPanel = document.getElementById("editLinksPanel");
    editLinksPanel.classList.add("display-settings");
    translateSettingsPanel();
};

const closeLinksPanel = () => {
    const editLinksPanel = document.getElementById("editLinksPanel");
    editLinksPanel.classList.remove("display-settings");
    dynamicTabIndex();
};

document.getElementById("closeLinkEditPanel").addEventListener("click", closeLinksPanel);
document.getElementById("closeLinkEditPanel").addEventListener("click", translateSettingsPanel);
document.getElementById("openLinksPanel").addEventListener("click", translateLinksPanel);
document.querySelector("main").addEventListener("click", closeLinksPanel);
document.querySelector("main").addEventListener("click", closeSettingsPanel);
document.querySelector("main").addEventListener("click", rotateSettingsIcon);
document.getElementById("settingsIcon").addEventListener("click", translateSettingsPanel);

// Modal Animation --------------------------------------------------------------------------------

const showErrorModal = (errorMessage) => {
    const errorModal = document.getElementById("errorModal");
    document.getElementById("modalErrorMessage").innerText = errorMessage
    errorModal.classList.remove("hidden-element");
}

const hideErrorModal = () => {
    const errorModal = document.getElementById("errorModal");
    errorModal.classList.add("hidden-element");
}

document.getElementById("modalOk").addEventListener("click", hideErrorModal);

// TabIndex Accessiblity Fix ----------------------------------------------------------------------

// Remove settings panels from Tab Index until visible
// Function looks like shit but should be fairly extensible

const dynamicTabIndex = () => {
    // Creates array from all tab elements in settings panel
    const settingsPanel = document.getElementById("settingsPanel")
    const settingsButtons = Array.from(settingsPanel.getElementsByTagName("button"))
    const settingsInputs = Array.from(settingsPanel.getElementsByTagName("input"))
    const settingsLinks = Array.from(settingsPanel.getElementsByTagName("a"))
    const allTabIndexedSettingsElements = settingsButtons.concat(settingsInputs, settingsLinks)
    
    // Creates array from all tab elements in edit links panel
    const editLinksPanel = document.getElementById("editLinksPanel");
    const editLinksButtons = Array.from(editLinksPanel.getElementsByTagName("button"))
    const editLinksInputs = Array.from(editLinksPanel.getElementsByTagName("input"))
    const editLinksLinks = Array.from(editLinksPanel.getElementsByTagName("a"))
    const allTabIndexedEditLinksElements = editLinksButtons.concat(editLinksInputs, editLinksLinks)

    // If panels aren't displayed currently, removes arrays of focusable elements from the tabindex
    if (settingsPanel.classList[settingsPanel.classList.length - 1] !== 'display-settings') {
        allTabIndexedSettingsElements.forEach(element => element.setAttribute("tabindex", "-1"))
    } else {
        allTabIndexedSettingsElements.forEach(element => element.removeAttribute("tabindex"))
    }

    if (editLinksPanel.classList[editLinksPanel.classList.length - 1] !== 'display-settings') {
        allTabIndexedEditLinksElements.forEach(element => element.setAttribute("tabindex", "-1"))
    } else {
        allTabIndexedEditLinksElements.forEach(element => element.removeAttribute("tabindex"))
    }
}

document.body.onload = dynamicTabIndex();