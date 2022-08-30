# UI Startpage

A startpage to replace the browser's default New Tab in the form of a Firefox-Addon. Using vanilla JS, HTML, and CSS as a project to practice fundamentals, API calls, and build a CRUD GUI from scratch. Drawing from [/r/startpages](https://www.reddit.com/r/startpages/) for some inspiration.

The extension uses geolocation permissions purely to tailor a weather data API call to the user's location, none of this information is stored or accessible to anyone other than the user, and storage permissions are used to persist user options selection.

## To-dos:

### Appearance

-   Fix settings panel 100vh bug.
-   Uncheck display settings toggle when panel is hidden, triggering gear icon rotation.
-   Fix default bg slider display values.
-   Refine widget positioning in the main screen.

    -   ~Fix positioning when bookmarks toolbar changes~
    -   Fix hide quick links button, div is still there when there are no links. Apply 'hidden-element' class to widget and edit links panel display container when there are no links.

-   Center search widget in page when all other widgets are hidden, use as centerpoint for the rest of the page.

### Functionality

-   Font settings widget

    -   ~Add 4 font option buttons with font-matched labels~
    -   ~Radio inputs linked to labels that function similarly to search toggle.~

-   ~Search Engine settings widget~

    -~Toggle search engine button~

-   ~Weather widget~

    -   ~Hide widget functionality~

-   Quick Links customisable functionality

    -   Remove links doesn't seem to work in extension version.
    -   ~Hide widget functionality~
    -   ~Add and remove quick links items with name and url~.
    -   ~Add SVG input field~
    -   Add remove link function to trash can icon as well, it's currently not functional despite having a click animation.

-   Create extension icons and add to /icons directory
-   Learn how to version after release.
-   Finalise manifest.json, and submit to Mozilla for signing.

### Future Features

-   Add music button in top left, links to Lofi Hip Hop youtube embed.

    -   Use FontAwesome icons; [Volume Up](https://fontawesome.com/v5/icons/volume-up?s=solid) and [Volue Mute](https://fontawesome.com/v5/icons/volume-mute?s=solid) for music playing and muted icons.
    -   Embed [lofi hip hop stream](https://www.youtube.com/watch?v=jfKfPfyJRdk) youtube link.

-   Reposition link order using the current link display in the edit links panel.

-   Add SVG Icons for quick links from within page without having to find an external source.

-   Background URL image functionality.
    -   Create hover options element, pencil icon or ellipsis, to replace default imgs with urls.
