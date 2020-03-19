const FLIXIER_URL = 'https://flixier.com'
const COMMON_STYLES = `
        border-radius: 0.5em;
        padding: 0.5em 1em;
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
        display: inline-block;
  `
const THEMES = {
    blue: `
      color: #fff;
      background: #007bff;
      ${COMMON_STYLES}
    `,
    white: `
      color: #007bff;
      background: #fff;
      ${COMMON_STYLES}
    `
}
const DEFAULT_CONFIG = { theme: 'blue', popup: true }

const FlixierSDK = {
    button(root, userConfig = DEFAULT_CONFIG) {
        const mergedConfig = computeFinalBtnConfig(userConfig)
        const linkEl = document.createElement('a')

        linkEl.textContent = 'Edit with Flixier'
        linkEl.href = FLIXIER_URL
        linkEl.target = '_blank'
        linkEl.rel = 'noopener'
        linkEl.style = THEMES[mergedConfig.theme]

        if (mergedConfig.popup) {
            linkEl.addEventListener('click', openPopUp)
        }

        root.appendChild(linkEl)
        return function () {
            linkEl.removeEventListener('click', openPopUp)
            linkEl.remove()
        }

        function openPopUp(e) {
            e.preventDefault()
            window.open(FLIXIER_URL, undefined, 'resizeable=yes')
        }
    }
}

export default FlixierSDK

/** Utility functions */
function computeFinalBtnConfig(userConfig) {
    const mergedConfig = Object.assign({}, DEFAULT_CONFIG, userConfig)
    const availableThemeIds = Object.keys(THEMES)

    if (!availableThemeIds.includes(mergedConfig.theme)) {
        const fallbackTheme = availableThemeIds[0]
        console.error(`[FlixierSDK]: unsupported theme "${mergedConfig.theme}". Available values are ${Object.keys(THEMES).join('|')}. Defaulting to ${fallbackTheme} `)

        mergedConfig.theme = fallbackTheme
    }

    return mergedConfig
}
