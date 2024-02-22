![image](https://github.com/bufferhead-code/nightowl/assets/6266887/6dbd652a-0307-4d2b-ac9e-26230b8b59c7)

## Nightowl

A "micro-framework" (\*hacky script) that adds dark mode to any website with a single line of code.

**You can learn more about how it works and how I made it [here](http://www.youtube.com/watch?v=JONzCyVXa60)**.

[![Youtube Video about how this project was made](http://img.youtube.com/vi/JONzCyVXa60/0.jpg)](http://www.youtube.com/watch?v=JONzCyVXa60 'Add Dark Mode to any Website with a single line of code')

## State of the Project

This project is still in a prototyping stage, and the API is still subject to change.
Please only use it with a fixed minor version.

## Known Issues

-   Position absolute and position fixed elements might not work as expected.
-   The toggle button overlay has weird paddings sometimes.

## Roadmap (Maybe)

-   [ ] Add more utility classes to improve contrast.
-   [ ] Add better support for `box-shadow`.

## Integration

Integration can be achieved by one of the following methods.

### CDN

Add these lines to your HTML file:

```html
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@bufferhead/nightowl@0.0.14/dist/nightowl.js"
></script>
```

### npm

To use nightowl with a bundler like Vite first install it with this command:

```shell
npm install @bufferhead/nightowl
```

Then add these lines to your HTML file:

```html
<script type="module">
    import { createNightowl } from '@bufferhead/nightowl'

    createNightowl({
        defaultMode: 'dark',
        toggleButtonMode: 'newState'
    })
</script>
```

## Configuration Options

### defaultMode

-   **Type:** `'light' | 'dark'`
-   **Default:** `'light'`

Sets the default mode for users that have not set a preference yet and do not have a system preference for dark mode.

### toggleButtonMode

-   **Type:** `'currentState' | 'newState'`
-   **Default:** `'currentState'`

Configures what state of the toggle button should be shown to the user.

-   `currentState` - Shows the state that is currently applied to the website.
-   `newState` - Shows the state that will be applied when the user clicks the button.

## Contribution Guidelines

Please open an issue and wait for one of the Maintainers to approve it until you open a merge request. 

## Credits

This project is heavily inspired by Aral Balkan who [wrote down this idea to implement dark mode in a few lines of CSS using CSS Filters](https://ar.al/2021/08/24/implementing-dark-mode-in-a-handful-of-lines-of-css-with-css-filters/).
