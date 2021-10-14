/**
 * return the longer chain of an array of strings
 * @param {string[]} arrayChar Array of string of one dimension
 * @return {string} longer chain
 */
function getLongerChain(arrayChar) {
    let longerString = '';
    arrayChar.forEach(char => {
        if (char.length > longerString.length) {
            longerString = char;
        }
    });
    return longerString;
}