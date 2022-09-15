// Default Link List ------------------------------------------------------------------------------

const defaultLinkList = [
    {
        linkName: "Reddit",
        linkURL: "https://www.reddit.com/",
        linkSVG: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 33.3333C61.0334 33.3333 70.95 36.775 77.8125 42.25C80.1601 41.4271 82.7248 41.4715 85.0425 42.3752C87.3602 43.279 89.278 44.9823 90.4489 47.1772C91.6199 49.3721 91.9666 51.9135 91.4265 54.3419C90.8864 56.7702 89.4951 58.9251 87.5042 60.4167C87.5042 75.375 70.7125 87.5 50.0042 87.5C29.6917 87.5 13.15 75.8333 12.5042 61.275L8.33752 60.4167C6.34663 58.9251 4.9553 56.7702 4.41518 54.3419C3.87507 51.9135 4.22184 49.3721 5.39278 47.1772C6.56371 44.9823 8.48149 43.279 10.7992 42.3752C13.1169 41.4715 15.6816 41.4271 18.0292 42.25C24.8875 36.7792 34.8042 33.3333 45.8375 33.3333H50Z" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 33.3333L54.1667 12.5L79.1667 16.6667" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M79.1667 20.8333C81.4679 20.8333 83.3333 18.9679 83.3333 16.6667C83.3333 14.3655 81.4679 12.5 79.1667 12.5C76.8655 12.5 75 14.3655 75 16.6667C75 18.9679 76.8655 20.8333 79.1667 20.8333Z" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.5 56.25C38.6506 56.25 39.5834 55.3173 39.5834 54.1667C39.5834 53.0161 38.6506 52.0833 37.5 52.0833C36.3494 52.0833 35.4167 53.0161 35.4167 54.1667C35.4167 55.3173 36.3494 56.25 37.5 56.25Z" fill="black" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M62.5 56.25C63.6506 56.25 64.5834 55.3173 64.5834 54.1667C64.5834 53.0161 63.6506 52.0833 62.5 52.0833C61.3494 52.0833 60.4167 53.0161 60.4167 54.1667C60.4167 55.3173 61.3494 56.25 62.5 56.25Z" fill="black" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.6667 70.8333C44.4459 72.2208 47.2209 72.9167 50 72.9167C52.7792 72.9167 55.5542 72.2208 58.3334 70.8333" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
        linkName: "Netflix",
        linkURL: "https://www.netflix.com/browse",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-netflix" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 20v-16l7 16v-16" />
        </svg>`,
    },
    {
        linkName: "Youtube",
        linkURL: "https://www.youtube.com/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="3" y="5" width="18" height="14" rx="4" />
        <path d="M10 9l5 3l-5 3z" />
        </svg>`,
    },
    {
        linkName: "1337x",
        linkURL: "https://1337x.to/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <polyline points="7 11 12 16 17 11" />
        <line x1="12" y1="4" x2="12" y2="16" />
        </svg>`,
    },
    {
        linkName: "Prime Video",
        linkURL: "https://www.primevideo.com/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 4v16l13 -8z" />
        </svg>`,
    },
    {
        linkName: "GitHub",
        linkURL: "https://github.com/PullRequestTimeout",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>`,
    },
    {
        linkName: "Figma",
        linkURL: "https://www.figma.com",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-figma" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="15" cy="12" r="3" />
        <rect x="6" y="3" width="12" height="6" rx="3" />
        <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
        </svg>`,
    }  
];

localStorage.setItem("defaultLinkList", JSON.stringify(defaultLinkList));

// User Link List ---------------------------------------------------------------------------------

// An array populated from localstorage that contains the user's custom list of links from previous sessions
let userLinkList = (localStorage.userLinkList == null) ? defaultLinkList : JSON.parse(localStorage.userLinkList);

// Display Current Links --------------------------------------------------------------------------

// Retrieves links from varaible source based on previous user actions
const populateLinks = () => {
    // Uses default links on first boot, persistent dynamic user links on subsequent boots
    let linkList = (localStorage.getItem("firstBoot") == null) ? defaultLinkList : userLinkList;
    // let linkList = userLinkList;
    // console.log(linkList);

    // The destination of the links
    const linksWidget = document.getElementById("linksWidget");
    const currentLinksDisplay = document.getElementById("currentLinksDisplay");

    // Refresh links
    linksWidget.innerHTML = "";
    currentLinksDisplay.innerHTML = "";

    // Loop through the array, store values in variables
    for (let i = 0; i < linkList.length; i++) {
        let linkName = linkList[i].linkName;
        let linkURL = linkList[i].linkURL;
        let linkSVG = linkList[i].linkSVG;

        // Template literals for HTML elements
        const quickLinkHTMLTemplate =  `<a href="${linkURL}"><div class="link-cards">${linkSVG}<h2>${linkName}</h2></div></a>`;
        // Inserts the elements into the widget
        linksWidget.insertAdjacentHTML("beforeend", quickLinkHTMLTemplate);
        
        // This template literal contains an inline onClick function that calls getLinkName()
        const currentLinkDisplayItem = `<li class="link-edit-item" onClick="getLinkName(event)">${linkName}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20"><path fill="#fff" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg></li>`;
        // Inserts the elements into the edit panel
        currentLinksDisplay.insertAdjacentHTML("beforeend", currentLinkDisplayItem);
    }    
};


// Create New Link Entry --------------------------------------------------------------------------

// Grabs the new link info from the input fields, stores that new link in the linkList array 
const submitLinkInput = () => {

    // User input fields
    const newLinkName = document.getElementById("newLinkName").value;
    const newLinkURL = document.getElementById("newLinkURL").value;
    const newLinkSVG = document.getElementById("newLinkSVG").value;
    
    // Plugs the user input into the linksList Array
    userLinkList.push({linkName: newLinkName, linkURL: newLinkURL, linkSVG: newLinkSVG});
    
    // Updates locally stored version of user links
    localStorage.setItem("userLinkList", JSON.stringify(userLinkList));

    // Updates links
    populateLinks();

    // Clears the text fields after input
    clearLinkInput();
};

// document.getElementById("submitLinkInput").addEventListener("click", submitLinkInput);

// Clear New Link Section Values ------------------------------------------------------------------

const clearLinkInput = () => {
    document.getElementById("newLinkName").value = "";
    document.getElementById("newLinkURL").value = "";
    document.getElementById("newLinkSVG").value = "";
};

document.getElementById("clearLinkInput").addEventListener("click", clearLinkInput);

// Empty Field Check ------------------------------------------------------------------------------

// After link creation functions are working properly, throw them in here for error handling
// This could be done with a custom modal rather than window.alert() for a more elegant solution 

const checkEmptyFields = () => {
    const newLinkNameLength = document.getElementById("newLinkName").value.length;
    const newLinkURLLength = document.getElementById("newLinkURL").value.length;
    const newLinkSVGLength = document.getElementById("newLinkSVG").value.length;
    if (newLinkNameLength < 1 || newLinkURLLength < 1 || newLinkSVGLength < 1) {
        alert("A new quick link needs a name, url, and logo.")
    } else if (newLinkNameLength >= 1 && newLinkNameLength < 3) {
        alert("A name needs to be at least 3 characters in length.")
    } else if (newLinkNameLength >= 3 && newLinkURLLength > 1 && newLinkSVGLength > 1) {
        submitLinkInput();
    }
};

document.getElementById("submitLinkInput").addEventListener("click", checkEmptyFields);

// Delete Array Item -----------------------------------------------------------------------------

// Retrieve the target element's ID
const getLinkName = (event) => {
    // console.log(event.target.textContent);
    
    for (var i = userLinkList.length - 1; i >= 0; --i) {
        if (userLinkList[i].linkName == event.target.textContent) {
            userLinkList.splice(i,1);
        }
    };
    
    // Updates locally stored version of user links
    localStorage.setItem("userLinkList", JSON.stringify(userLinkList));
    
    populateLinks();
    
};

// Restore Default Links -------------------------------------------------------------------------

const restoreDefaultLinks = () => {
    userLinkList = JSON.parse(localStorage.getItem("defaultLinkList"));
    localStorage.setItem("userLinkList", JSON.stringify(userLinkList));
    populateLinks();

};

document.getElementById("restoreDefaultLinks").addEventListener("click", restoreDefaultLinks)

// Clear All Links --------------------------------------------------------------------------------

const clearAllLinks = () => {
    userLinkList = [];
    localStorage.setItem("userLinkList", JSON.stringify(userLinkList));
    populateLinks();
}

document.getElementById("clearAllLinks").addEventListener("click", clearAllLinks);

// Boot -------------------------------------------------------------------------------------------

// If the page has never been booted before, set a marker in localstorage saying that it now has,
// and boot from the default list of links. If the marker is present on boot, boot from a JSON.parse 
// of the present object string in localstorage.

const bootLinksOrigin = () => {
    if (localStorage.getItem("firstBoot") == null) {
        // Sets default list as starting point for dynamic functions
        localStorage.setItem("userLinkList", JSON.stringify(defaultLinkList));

        populateLinks();
        console.log("Links being loaded from the default list.");
        
        // Leave a marker to guide subsequent boots
        localStorage.setItem("firstBoot", "completed");
    } else if (localStorage.getItem("firstBoot") == "completed") {
        populateLinks();
        console.log("Links being loaded from dynamic user list.")
    }
};

document.body.onload = bootLinksOrigin();