if (process.argv.length < 3) {
    console.log("Sent a array of string like param: node index.js '[\"abn\", \"fasfas\"]'  ");
    process.exit(-1);
}

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

const param = JSON.parse(process.argv[2]);


console.log(getLongerChain(param));