![image](https://github.com/bufferhead-code/nightowl/assets/6266887/6dbd652a-0307-4d2b-ac9e-26230b8b59c7)

## Nightowl

A "micro-framework" (\*hacky script) that adds dark mode to any website with a single line of code.

**You can learn more about how it works and how i made it [here](http://www.youtube.com/watch?v=JONzCyVXa60)**

[![Youtube Video about how this project was made](http://img.youtube.com/vi/JONzCyVXa60/0.jpg)](http://www.youtube.com/watch?v=JONzCyVXa60 'Add Dark Mode to any Website with a single line of code')

## State of this project

This project is still in an prototyping stage, the API is still subject to change.
Please only use it with fixed Minor versions.

## Known issues

-   Position absolute and position fixed elements might not work as expected
-   The Toggle Button Overlay has weird paddings sometimes

## Roadmap (maybe)

[] Add more utility classes for improving contrast
[] Add better support for box-shadows

## Integration

Integration can be achieved by adding one of the following script tag to your website.

Using a CDN:

```
<script type="module" src="https://cdn.jsdelivr.net/npm/@bufferhead/nightowl@0.0.12/dist/nightowl.js"></script>
```

Install via npm:

-   First install Nightowl in your project using npm

```
npm install @bufferhead/nightowl
```

-   Then add this <script> tag to your index:

```
<script type="module">
    import {createNightowl} from '@bufferhead/nightowl'

    createNightowl({
        defaultMode: 'dark',
        toggleButtonMode: 'newState'
    })

</script>
```

## configuration Options

-   defaultMode: 'dark' | 'light' (Default: 'light')
    -   Sets the default mode for users that have not set a preference yet and do not have a system preference for dark mode
-   toggleButtonMode: 'newState' | 'currentState' (Default: 'currentState')
    -   Configures what state of the toggle button should be shown to the user
        -   'newState' will show the state that will be applied when the user clicks the button
        -   'currentState' will show the state that is currently applied to the website

## Credits

This project is heavily inspired by Aral Balkan who [wrote down this idea to implement dark mode in a few lines of CSS using CSS Filters](https://ar.al/2021/08/24/implementing-dark-mode-in-a-handful-of-lines-of-css-with-css-filters/).
