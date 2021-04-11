import { expect } from 'chai';
import { anagrams, isAnagram} from './anagrams';

 
describe('isAnagram', () => {
    it('should return true if the two words are anagrams', () => {
        const expected = ('cat', 'tac');
        // const expected2 = { c: 1, a: 1, t: 1 };
        // const expected = ('word1, word2');
        // const actual = anagrams('word1', 'word5');
        // const actual = isAnagram('word1', 'word5');
        const actual = isAnagram('cat', 'tac');
        expect(actual).to.deep.equal(true);
    });
    
    it('should return false if the two words are anagrams', () => {
        const expected = ('cat', 'tac');
        // const expected2 = { c: 1, a: 1, t: 1 };
        // const expected = ('word1, word2');
        // const actual = anagrams('word1', 'word5');
        // const actual = isAnagram('word1', 'word5');
        const actual = isAnagram('cat', 'tacg');
        expect(actual).to.deep.equal(false);
    });
    // it('returns an empty object when passed an empty string', () => {
    //     const expected = {};
    //     const actual = anagrams('');
    //     expect(actual).to.deep.equal(expected);
    // });
})