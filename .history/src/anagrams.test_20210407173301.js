import { expect } from 'chai';
import { anagrams, isAnagram} from './anagrams';


describe('isAnagram', () => {
    it('LIL Challenge', () => {
        const expected = 'word1', 'word2';
        // const expected = ('word1, word2');
        // const actual = anagrams('word1', 'word5');
        // const actual = isAnagram('word1', 'word5');
        const actual = isAnagram('word1', 'word2');
        expect(actual).to.deep.equal(expected);
    });
    // it('returns an empty object when passed an empty string', () => {
    //     const expected = {};
    //     const actual = anagrams('');
    //     expect(actual).to.deep.equal(expected);
    // });
})