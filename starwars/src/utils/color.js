/* some of the color names from the star wars api are not
   css compliant, so this utility is intended to provide
   to handle proper color output */

const color = colorName => {
    if (colorName === 'blue-gray'){
        return '#6699CC'
    }
    return colorName
}

export default color