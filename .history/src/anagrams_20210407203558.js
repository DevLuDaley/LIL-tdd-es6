// import { getLetterCount } from './letter-count';

const getLetterCount = string => {
// const getLetterCount = string => {
    const letters = string.split('');
    let letterCount = {};

    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1
        }
        else { letterCount[letter] += 1 }
    })
    
    return letterCount;
}



// export const isAnagram = (string1, string2) => {

const isAnagram = (string1, string2) => {
    // define Anagram string
        //  2 words with same # of letters used the same amount of times
        // ! use getLetterCount to compare
        // ! (NOPE) maybe lodash? 
    const string1Count = getLetterCount(string1)
    console.log(`🚀 ~ file: anagrams.js ~ line 11 ~ //anagrams ~ string1Count`, string1Count)
    const string2Count = getLetterCount(string2)
    console.log(`🚀 ~ file: anagrams.js ~ line 13 ~ //anagrams ~ string2Count`, string2Count)
    // const string2Count = getLetterCount(string2)
    // if (string1Count == string2Count) {
    if (string1Count == string2Count) {
    return true
    // return { c: 1, a: 1, t: 1 }
    }

    // declare string
    // reverse string
    // compare declaredString to reversedString
    //! if true return "These words are anagrams"
        // ie "listen" => "silent"
        // ie "elbow" => "below"
        // ignore spacing ie "conversation" => "voices rant on" 
        // ignore case ie "STATE" => "taste"
    //! if false return "These words are not anagrams"
    // const words = strings.split(",") 
    // console.log(words);
    // let word1 = words[0]
    // let word2 = words[1]
    // let string1 = 
    // let string2 = 

    // if (string1 && string2) { 
    //     // return words
    //     // return strings.split(",") 
    //     return string1, string2
    //     // return string1 && string2
    //     // return string1 && string2
    // }
    // // return true
    // else {
    //     return false
    // }
}
anagrams('word1', 'word2')