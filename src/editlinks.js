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
        linkName: "Prime Video",
        linkURL: "https://www.primevideo.com/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 4v16l13 -8z" />
        </svg>`,
    },
    {
        linkName: "GitHub",
        linkURL: "https://github.com/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>`,
    },
    {
        linkName: "Gmail",
        linkURL: "https://mail.google.com/mail/",
        linkSVG: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-gmail" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
        <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
        <path d="M16 4l-4 4l-4 -4" />
        <path d="M4 6.5l8 7.5l8 -7.5" />
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

        const currentLinkDisplayItem = `<li class="link-edit-item" draggable="true">${linkName}<svg class="removeLink" height="35" viewBox="0 0 847 847" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="423.5" cy="423.5" r="423.5" fill="white" fill-opacity="0.20"/><path d="M335.2 185.69C340.6 174.848 351.7 168 363.8 168H484.2C496.3 168 507.4 174.848 512.8 185.69L520 200H616C633.7 200 648 214.33 648 232C648 249.67 633.7 264 616 264H232C214.33 264 200 249.67 200 232C200 214.33 214.33 200 232 200H328L335.2 185.69ZM231.1 296H616V616C616 651.3 587.3 680 552 680H295.1C260.65 680 231.1 651.3 231.1 616V296ZM311.1 376V600C311.1 608.8 319.2 616 327.1 616C336.8 616 343.1 608.8 343.1 600V376C343.1 367.2 336.8 360 327.1 360C319.2 360 311.1 367.2 311.1 376ZM407.1 376V600C407.1 608.8 415.2 616 423.1 616C432.8 616 440 608.8 440 600V376C440 367.2 432.8 360 423.1 360C415.2 360 407.1 367.2 407.1 376ZM504 376V600C504 608.8 511.2 616 520 616C528.8 616 536 608.8 536 600V376C536 367.2 528.8 360 520 360C511.2 360 504 367.2 504 376Z"fill="white"/></svg></li>`;
        // Inserts the elements into the edit panel
        currentLinksDisplay.insertAdjacentHTML("beforeend", currentLinkDisplayItem);
    }

    hideLinkListsIfEmpty();
    addSVGListeners();
    addLinkDraggingListeners();
};

// Adds removeLink function to each edit link svg, every time the list is populated
const addSVGListeners = () => {
    const removeLinkIcons = document.querySelectorAll('.removeLink');
    removeLinkIcons.forEach(svg => {
        svg.addEventListener('click', removeLink);
    });
}

// Hide elements if userLinkList in localStorage is empty
const hideLinkListsIfEmpty = () => {
    const linksWidget = document.getElementById("linksWidget");
    const currentLinksDisplay = document.getElementById("currentLinksDisplay");
    if (userLinkList.length < 1) {
        linksWidget.classList.add("hidden-element");
        currentLinksDisplay.classList.add("hidden-element");
    } else {
        linksWidget.classList.remove("hidden-element");
        currentLinksDisplay.classList.remove("hidden-element");
    };
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

const checkEmptyFields = () => {
    const newLinkNameLength = document.getElementById("newLinkName").value.length;
    const newLinkURLLength = document.getElementById("newLinkURL").value.length;
    const newLinkSVGLength = document.getElementById("newLinkSVG").value.length;
    const modalErrorMessage = document.getElementById("modalErrorMessage");
    const newLinkURL = document.getElementById("newLinkURL").value;
    const newLinkSVG = document.getElementById("newLinkSVG").value
    const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    
    // This conditional checks whether there has been sufficient input in the fields, and checks validity of the url against regex.
    if (newLinkNameLength < 1 || newLinkURLLength < 1 || newLinkSVGLength < 1) {
        showErrorModal();
        modalErrorMessage.innerText = "A new quick link needs a name, url, and icon.";
    } else if (newLinkNameLength >= 1 && newLinkNameLength < 3) {
        showErrorModal();
        modalErrorMessage.innerText = "A name needs to be at least 3 characters in length.";
    } else if (urlRegex.test(newLinkURL) == false) {
        showErrorModal();
        modalErrorMessage.innerText = "Oops, this doesn't appear to be a valid URL.";
    } else if (newLinkSVGLength < 10) {
        showErrorModal();
        modalErrorMessage.innerHTML = `This is going to look pretty ugly without an icon,<br>don't you think?<br><br><a title="Tabler Icons" href="https://tablericons.com/" target="_blank"
        class="link-edit-panel-link">Tabler</a> is a great source of SVGs!`;
    } else if (newLinkNameLength >= 3 && urlRegex.test(newLinkURL) == true && newLinkSVGLength > 1) {
        // submitLinkInput();
        validateSVG(newLinkSVG);
    }
};

document.getElementById("submitLinkInput").addEventListener("click", checkEmptyFields);

// Check if valid svg -----------------------------------------------------------------------------

const validateSVG = (svg) => {
    const svgParser = new DOMParser().parseFromString(svg, "text/xml");
    if (svgParser.activeElement.tagName == "svg") {
        submitLinkInput()
    } else {
        showErrorModal();
        modalErrorMessage.innerText = "Oops! This doesn't seem to be a valid SVG."
    }
}

// Delete Array Item ------------------------------------------------------------------------------

const removeLink = (event) => {
    // Compared the clicked list item's title to each of the linkName value, and then removes the matching object from the array
    for (var i = userLinkList.length - 1; i >= 0; --i) {
        if (userLinkList[i].linkName == event.target.parentNode.parentNode.textContent) {
            userLinkList.splice(i, 1);
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

// Draggable Links -------------------------------------------------------------------------------------------

// Here be draggons

const currentLinksDisplay = document.getElementById("currentLinksDisplay")

let oldArrayPosition
let newArrayPosition

function addLinkDraggingListeners () {
    const draggableLinks = document.querySelectorAll(".link-edit-item")

    draggableLinks.forEach(draggableLink => {
        draggableLink.addEventListener("dragstart", () => {
            draggableLink.classList.add("dragging")
            oldArrayPosition = userLinkList.findIndex(x => x.linkName == draggableLink.innerText)
        })
    
        draggableLink.addEventListener("dragend", () => {
            draggableLink.classList.remove("dragging")
            if (oldArrayPosition > newArrayPosition) {
                moveIndices(oldArrayPosition, newArrayPosition + 1)
            } else {
                moveIndices(oldArrayPosition, newArrayPosition)
            }
            localStorage.setItem("userLinkList", JSON.stringify(userLinkList))
            populateLinks()
            
        })
    })
}

currentLinksDisplay.addEventListener("dragover", e => {
    e.preventDefault()
    const draggableElement = document.querySelector('.dragging')
    const afterElement = getDragAfterElement(currentLinksDisplay, e.clientY)
    
    if (afterElement == null) {
        currentLinksDisplay.appendChild(draggableElement)
        newArrayPosition = userLinkList.length - 1
      } else {
        currentLinksDisplay.insertBefore(draggableElement, afterElement)
        const indexOfAfterElement = userLinkList.findIndex(x => x.linkName == afterElement.innerText)
        newArrayPosition = indexOfAfterElement - 1
      }
})

function moveIndices (from, to) {
    userLinkList.splice(to, 0, userLinkList.splice(from, 1)[0])
}

function getDragAfterElement(container, y) {
    const editLinkElements = Array.from(document.querySelectorAll('.link-edit-item:not(.dragging)'))
    
    return editLinkElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
            } else {
            return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
}

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

