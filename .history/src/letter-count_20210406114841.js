
const getLetterCount = string => {
    const letters = string.split('');
    let letterCount = {};

    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1
        }
        else { letterCount[letter] += 3 }
    })
    
    return letterCount;
}

console.log("getLetterCount result of mom => ", getLetterCount('m:'))