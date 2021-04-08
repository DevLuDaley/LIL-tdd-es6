import { expect } from 'chai';
import { anagrams, isAnagram} from './anagrams';


describe('isAnagram', () => {
    it('LIL Anagram Function Challenge', () => {
        // const expected = 'wordy1' && 'word2';
        // const expected = 'cat' && 'cat';
        // const expected = true;
        const expected = ('cat', 'tac');
        // const expected2 = { c: 1, a: 1, t: 1 };
        // const expected = ('word1, word2');
        // const actual = anagrams('word1', 'word5');
        // const actual = isAnagram('word1', 'word5');
        const actual = isAnagram('cat', 'tafc');
        expect(actual).to.deep.equal(true);
    });
    // it('returns an empty object when passed an empty string', () => {
    //     const expected = {};
    //     const actual = anagrams('');
    //     expect(actual).to.deep.equal(expected);
    // });
})