// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).


// Examples:
// 1: -1
// 14: -14
// -34: 34







//My Solutions
function opposite(number) {
    return(-number)
}

function opposite(number) {
    return number < 0 ? Math.abs(number) : -number
}


const opposite = number => -number