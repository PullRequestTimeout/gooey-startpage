# Gooey Startpage

Gooey (GUI) is a startpage to replace the browser's default New Tab in the form of a Firefox-Addon. Using vanilla JS, HTML, and CSS as a project to practice fundamentals, API calls, and build a CRUD GUI from scratch. Drawing from [/r/startpages](https://www.reddit.com/r/startpages/) for some inspiration.

The extension uses geolocation permissions purely to tailor a weather data API call to the user's location, none of this information is stored or accessible to anyone other than the user, and storage permissions are used in the form of localstorage to persist user options selection.

If any bugs are discovered, feel free to contact me at 
<!-- TODO add conatct details -->

## What I've Learnt So Far:

As this project is a learning tool to improve my fundamentals before diving into more challenging areas of JS, here are some things I'm learning that I can keep in mind for future projects.

- Writing vanilla CSS and keeping it maintainable at scale is hard. I now undertsand why tools and conventions like Tailwind and BEM are used, and I'll look into using similar tools in my next projects. I could also mitigate this in the future by sticking more closely to a design file rather than designing in-browser, and focusing on writing component-based CSS modules that can be used repeatedly (DRY!).
- Similarly, vanilla JS tends to get messy when keeping all functionality in larger files and writing modules ad-hoc. Remember the Seven Ps; Prior Preperation Prevents Piss Poor Performance. Plan code, then write it, and having a secondary psuedo-code file might be useful for planning.
- Keep in mind separation of concerns. One potential way to make JS files (and potentially CSS too!) more readable and maintainable is to separate files based on modules/functionality.
- Getting more familiar with accessibility practices like semantic html and how it impacts keyboard navigation, something to keep in mind. It's often a balance between being able to achieve what the design outlines and adhering to strict accessiblity practices. Sometimes just adding a div to the tabindex is a much more efficient approact than forcing a semantic element into a design it isn't really suited for. And vice versa too! Semantic HTML exists for reason. 
- I'm a bit of a perfectionist. Learn when to recognise when something is "good enough" and move on, it's slowing down the learning process.
- AVOID SIDE EFFECTS.

