# Gooey Startpage

Gooey (GUI) is a startpage to replace the browser's default New Tab in the form of a Firefox-Addon. Using vanilla JS, HTML, and CSS as a project to practice fundamentals, API calls, and build a CRUD GUI from scratch. Drawing from [/r/startpages](https://www.reddit.com/r/startpages/) for some inspiration.

The extension uses geolocation permissions purely to tailor a weather data API call to the user's location, none of this information is stored or accessible to anyone other than the user, and storage permissions are used to persist user options selection.

## What I've Learnt So Far:

As this project is a learning tool to improve my fundamentals before diving into more challenging areas of JS, here are some things I'm learning that I can keep in mind for future projects.

- Writing vanilla CSS and keeping it maintainable at scale is hard. I now undertsand why tools like Tailwind are used, and I'll look into using that in my next project. I could also mitigate this in the future by sticking more closely to a design file rather than designing in-browser, and focusing on writing component-based CSS modules that can be used repeatedly (DRY!).
- Similarly, vanilla JS tends to get messy when keeping all functionality in larger files and writing modules ad-hoc. Remember the Seven Ps; Prior Preperation Prevents Piss Poor Performance. Plan code, then write it, and having a secondary psuedo-code file might be useful for planning.
- Keep in mind separation of concerns. One potential way to make JS files (and potentially CSS too!) more readable and maintainable is to separate files based on modules/functionality.
- Getting more familiar with accessibility practices like semantic html and how it impacts keyboard navigation, something to keep in mind. It's often a balance between being able to achieve what the design outlines and adhering to strict accessiblity practices. Sometimes just adding a div to the tabindex is a much more efficient approact than forcing a semantic element into a design it isn't really suited for.
- I'm a bit of a perfectionist. Learn when to recognise when something is "good enough" and move on, it's slowing down the learning process.

## To-dos:

### Appearance

-   Fix settings panel 100vh bug.
-   ~Uncheck display settings toggle when panel is hidden, triggering gear icon rotation.~
-   ~Fix default bg slider display values.~
-   ~Refine widget positioning in the main screen.~

    -   ~Fix positioning when bookmarks toolbar changes~
    -   ~Fix hide quick links button, div is still there when there are no links. Apply 'hidden-element' class to widget and edit links panel display container when there are no links.~

-   ~Center search widget in page when all other widgets are hidden, use as centerpoint for the rest of the page.~

### Functionality

-   ~Font settings widget~
    -   ~Add 4 font option buttons with font-matched labels~
    -   ~Radio inputs linked to labels that function similarly to search toggle.~

-   ~Search Engine settings widget~
    -~Toggle search engine button~

-   ~Weather widget~
    -   ~Hide widget functionality~

-   Quick Links customisable functionality
    -   Remove links doesn't seem to work in extension version. Maybe due to manifest.json file, and how the script files are declared.
    -   ~Hide widget functionality~
    -   ~Add and remove quick links items with name and url~.
    -   ~Add SVG input field~
    -   ~Add remove link function to trash can icon.~

-   ~Seperate animation JS and DOM JS into different files to take a more module-based approach. Things are getting a little cluttered.~
-   ~Empty field check for new link input.~
    -	~Build a custom modal for more elegant solution than using alert().~
-   Remove items from tabindex until they're visible, and make sure tabindex functions correctly.
-   ~Create extension icons and add to /icons directory.~
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
