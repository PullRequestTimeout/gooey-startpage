// Link Data Store --------------------------------------------------------------------------------

// Default links as a starting point, just to dummy run the functions
// After every update to the list, this should be written to localStorage as a string and then parsed as JSON
const linkList = [
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
    
]

// Empty Field Check ------------------------------------------------------------------------------

// After link creation functions are working properly, throw them in here for error handling
// This could be done with a custom modal rather than window.alert() for a more elegant solution 

const checkEmptyFields = () => {
    const newLinkName = document.getElementById("newLinkName");
    const newLinkURL = document.getElementById("newLinkURL");
    const newLinkSVG = document.getElementById("newLinkSVG");
    if (newLinkName.value < 1 || newLinkURL.value < 1) {
        alert("A new quick link needs both a name and a URL.")
    } else if (newLinkSVG.value < 1) {
        alert("Are you sure you don't want to use an icon?")
    }
};
 
// Create New Link Entry --------------------------------------------------------------------------

// Grabs the new link info from the input fields, creates a template literal for the element with that info, 
// stores that new link in the linkList array 
const submitLinkInput = () => {
    
    // User input fields
    const newLinkName = document.getElementById("newLinkName").value;
    const newLinkURL = document.getElementById("newLinkURL").value;
    const newLinkSVG = document.getElementById("newLinkSVG").value;
    
    // Plugs the user input into the linksList Array
    linkList.push({linkName: newLinkName, linkURL: newLinkURL, linkSVG: newLinkSVG});
    
    // Clears the text fields after input
    clearLinkInput();

    // Updates the display of current links in the edit links panel
    const currentLinksList = document.getElementById("currentLinksList");
    
};

// Retrieves Links from linkList Array and displays them in the Links Widget ----------------------

const populateLinks = () => {
    // The destination of the links
    const linksWidget = document.getElementById("linksWidget");
    const currentLinksDisplay = document.getElementById("currentLinksDisplay");

    // Loop through the array, store values in variables
    for (let i = 0; i < linkList.length; i++) {
        let linkName = linkList[i].linkName;
        let linkURL = linkList[i].linkURL;
        let linkSVG = linkList[i].linkSVG;
        
        // Template literal for HTML elements
        const linkHTMLTemplate =  `<a href="${linkURL}"><div class="link-cards">${linkSVG}<h2>${linkName}</h2></div></a>`;

        // 
        linksWidget.insertAdjacentHTML("beforeend", linkHTMLTemplate);
    }    
};



// Clear New Link Section Values ------------------------------------------------------------------

const clearLinkInput = () => {
    const newLinkName = document.getElementById("newLinkName");
    const newLinkURL = document.getElementById("newLinkURL");
    const newLinkSVG = document.getElementById("newLinkSVG");

    newLinkName.value = "";
    newLinkURL.value = "";
    newLinkSVG.value = "";
};


document.getElementById("submitLinkInput").addEventListener("click", submitLinkInput);
// document.getElementById("submitLinkInput").addEventListener("click", checkEmptyFields)
document.getElementById("clearLinkInput").addEventListener("click", clearLinkInput);

// Boot -------------------------------------------------------------------------------------------

document.body.onload = populateLinks();