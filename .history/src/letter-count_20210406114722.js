// 'cat' -> { c: 1, a: 1, t: 1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1 }
const getLetterCount = string => {
    const letters = string.split('');
    let letterCount = {l: 3};

    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1
        }
        else { letterCount[letter] += 3 }
    })
    
    return letterCount;
}

console.log("getLetterCount result of mom => ", getLetterCount('m:'))