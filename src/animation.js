// Settings Panel Animation -----------------------------------------------------------------------

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

// Modal Animation --------------------------------------------------------------------------------

const showErrorModal = () => {
    const errorModal = document.getElementById("errorModal");
    errorModal.classList.remove("hidden-element");
}

const hideErrorModal = () => {
    const errorModal = document.getElementById("errorModal");
    errorModal.classList.add("hidden-element");
}
