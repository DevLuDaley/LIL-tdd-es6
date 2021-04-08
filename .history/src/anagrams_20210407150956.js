export const anagrams = strings => {
// const anagrams = () => {
    // define Anagram string
        //  2 words with same # of letters used the same amount of times
        // ! use getLetterCount to compare
        // ! lodash
    // declare string
    // reverse string
    // compare declaredString to reversedString
    //! if true return "These words are anagrams"
        // ie "listen" => "silent"
        // ie "elbow" => "below"
        // ignore spacing ie "conversation" => "voices rant on" 
        // ignore case ie "STATE" => "taste"
    //! if false return "These words are not anagrams"
    const words = strings.split(",") 
    // console.log(words);
    let word1 = words[0]
    let word2 = words[1]

    if (strings) { 
        // return words
        return strings[0]
    }
    // return true
    else { 
        return false
    }
}
// anagrams('word1', 'word2')