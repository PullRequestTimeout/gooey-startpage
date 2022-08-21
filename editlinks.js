// Creates an empty array to populate
const linkList = [];

// Grabs the new link info from the input fields, creates a template literal for the element with that info, 
// stores that new link in the linkList array 
const submitLinkInput = () => {
    
    // Identifies where the values are coming from, and where they're going
    const newLinkName = document.getElementById("newLinkName");
    const newLinkURL = document.getElementById("newLinkURL");
    const newLinkSVG = document.getElementById("newLinkSVG");
    const linksWidget = document.getElementById("linksWidget");

    // Grabs the values and stores them in variables
    let linkName = newLinkName.value;
    let linkURL = newLinkURL.value;
    let linkSVG = newLinkSVG.value;
    
    // Inputs the created variables into a template literal, this should be plug and play straight into the widget
    const linkHTMLTemplate =  `<a href="${linkURL}"><div class="link-cards">${linkSVG}<h2>${linkName}</h2></div></a>`;

    // Plugs the template into an array with the link name, and the full template literal as the 'element' key's value
    linkList.push({name: linkName, element: linkHTMLTemplate});
    
    // Plugs the asembled template into the widget
    // linksWidget.appendChild(linkHTMLTemplate);



    // Clears the text fields after input
    // clearLinkInput();

};

// Clear New Link Section Values

const clearLinkInput = () => {
    const newLinkName = document.getElementById("newLinkName");
    const newLinkURL = document.getElementById("newLinkURL");
    const newLinkSVG = document.getElementById("newLinkSVG");

    newLinkName.value = "";
    newLinkURL.value = "";
    newLinkSVG.value = "";
}

document.getElementById("submitLinkInput").addEventListener("click", submitLinkInput);
document.getElementById("clearLinkInput").addEventListener("click", clearLinkInput);