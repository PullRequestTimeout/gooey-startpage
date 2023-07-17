# Gooey Startpage

Gooey (GUI) is a startpage to replace the browser's default New Tab in the form of a Firefox-Addon, [check it out here](https://addons.mozilla.org/en-CA/firefox/addon/gooey-startpage/). Using vanilla JS, HTML, and CSS as a project to practice fundamentals, API calls, and build a CRUD GUI from scratch. Drawing from [/r/startpages](https://www.reddit.com/r/startpages/) for some inspiration.

The extension uses geolocation permissions purely to tailor a weather data API call to the user's location, none of this information is stored or accessible to anyone other than the user, and storage permissions are used in the form of localstorage to persist user options selection.

## What I Learnt In This Project:

This project was a learning tool to strengthen fundamentals, here are some things I learnt that I can keep in mind for future projects.

-   Writing vanilla CSS and keeping it maintainable at scale is tricky. I now undertsand why tools and conventions like Tailwind and BEM are used, and I'll look into using similar tools in my next projects. This could also be mitigated in the future by sticking more closely to a design file rather than designing primarily in-browser, and focusing on writing component-based CSS modules that can be used repeatedly (DRY!).
-   Similarly, vanilla JS tends to get messy when keeping all functionality in larger files and writing components ad-hoc. Remember the Seven Ps; Prior Preperation Prevents Piss Poor Performance. Plan code, then write it, and having a secondary psuedo-code file might be useful for planning.
-   Separation of concerns is key for maintainability. One potential way to make JS files (and potentially CSS too!) more readable and maintainable is to separate files based on modules/functionality (I love React and Svelte for the modularity they provide - Present-day Jake).
-   Getting more familiar with accessibility practices like semantic html and how it impacts keyboard navigation, something to keep in mind. It's often a balance between being able to achieve what the design outlines and adhering to strict accessiblity practices. I think it's important to find a balance between the two, and to keep in mind that accessibility is a spectrum, and not all users will have the same needs.
-   I'm a bit of a perfectionist. Learn when to recognise when something is "good enough" and move on, it's slowing down the learning process.
-   Sometimes fancy ES6 features are great, but knowing when not to use them is also good. Eg. arrow functions and ternaries aren't as easily readable at a glance, but for one-liners they're nice and concise.
-   Working with the weather API for this took me down a rabbit hole of managing secrets, despite me swapping APIs in this project for a free one without a key. However this ultimately led to me learning about env variables and pushed me to build my first server, an iteration of which eventually got used in part in DirtServer.
