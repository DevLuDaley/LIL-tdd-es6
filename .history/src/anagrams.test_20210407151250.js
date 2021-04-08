import { expect } from 'chai';
import { anagrams} from './anagrams';


describe('isAnagram', () => {
    it('LIL Challenge', () => {
        const expected = ('word1, word2');
        const actual = isAnagram('word1', 'word5');
        expect(actual).to.deep.equal(expected);
    });
    // it('returns an empty object when passed an empty string', () => {
    //     const expected = {};
    //     const actual = anagrams('');
    //     expect(actual).to.deep.equal(expected);
    // });
})