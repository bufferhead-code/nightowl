import './darkmode.css'

const LOCAL_STORAGE_KEY = 'nightowl-color-scheme'
const LIGHT = 'light';
const DARK = 'dark';

let store : Storage | null = null;
let persistPreference = true;
let mode = LIGHT;

try {
    store = localStorage;
} catch (err) {
    // Do nothing. The user probably blocks cookies.
}

window.addEventListener('load', () => {
   initializeNightowl();
   initializeSwitcher();
});

function enableDarkMode() {
    mode = DARK;
    const htmlElement = document.querySelector('html');
    if(htmlElement){
        htmlElement.classList.remove('nightowl-light');
        htmlElement.classList.add('nightowl-dark');
    }
}

function enableLightMode() {
    mode = LIGHT;
    const htmlElement = document.querySelector('html');
    if(htmlElement){
        htmlElement.classList.remove('nightowl-dark');
        htmlElement.classList.add('nightowl-light');
    }
}

function toggleMode() {
    mode = mode === DARK ? LIGHT : DARK;
    updateMode();
}

function updateMode() {
    if(mode === DARK){
        enableDarkMode();
    }
    else{
        enableLightMode();
    }
    setSwitcherIcon();
}

function setSwitcherIcon() {
    const switcher = document.getElementById('nightowl-switcher-default');
    if(switcher){
        const lightIcon =  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">\n' +
            '  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />\n' +
            '</svg>';
        const darkIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">\n' +
            '  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />\n' +
            '</svg>';

        switcher.innerHTML = mode === DARK ? lightIcon : darkIcon;
    }

}

function initializeSwitcher(){
    const switcher = document.createElement('div');
    console.log(window.innerWidth);
    switcher.id = 'nightowl-switcher-default';
    switcher.style.position = 'fixed';
    switcher.style.left = 'calc(100vw - 80px)';
    switcher.style.top = 'calc(100vh - 80px)';
    switcher.style.width = '50px';
    switcher.style.height = '50px';
    switcher.style.borderRadius = '50%';
    switcher.style.backgroundColor = 'white';
    switcher.style.display = 'flex';
    switcher.style.justifyContent = 'center';
    switcher.style.alignItems = 'center';
    switcher.style.cursor = 'pointer';
    switcher.style.zIndex = '9999';
    switcher.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    switcher.style.transition = 'all 0.3s ease-in-out';
    switcher.style.overflow = 'hidden';
    switcher.style.color = 'black';

    switcher.addEventListener('click', () => {
        toggleMode();
        storeModeInLocalStorage();
    })

    document.body.appendChild(switcher);
    setSwitcherIcon();

}

function initializeColorSchemeChangeListener() {
    // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    //     const newColorScheme = e.matches ? "dark" : "light";
    // });
}

function checkForRememberedValue() {

    let rememberedValue = null;
    try {
        if(store){
            rememberedValue = store.getItem(LOCAL_STORAGE_KEY);
        }
    } catch (err) {
        // Do nothing. The user probably blocks cookies.
    }
    console.log('storage', rememberedValue)
    if (rememberedValue && [DARK, LIGHT].includes(rememberedValue)) {
        mode = rememberedValue;
    } else if (hasNativeDarkPrefersColorScheme()) {
        mode = DARK;
    }

}

function initializeNightowl() {
    initializeColorSchemeChangeListener();

    checkForRememberedValue();

    updateMode();


}

function storeModeInLocalStorage() {
    if(persistPreference && mode !== null){
        try {
            if(store){
                store.setItem(LOCAL_STORAGE_KEY, mode);
            }
        } catch (err) {
            // Do nothing. The user probably blocks cookies.
        }
    }

}

function hasNativeDarkPrefersColorScheme() {
    return window.matchMedia && (window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-color-scheme:dark)').matches)
}