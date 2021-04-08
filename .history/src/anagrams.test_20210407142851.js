import { expect } from 'chai';
import { anagrams} from './anagrams';


describe('isAnagram - basic functionality', () => {
    it('returns true', () => {
        const expected = true;
        const actual = anagrams('');
        expect(actual).to.deep.equal(expected);
    });
    // it('returns an empty object when passed an empty string', () => {
    //     const expected = {};
    //     const actual = anagrams('');
    //     expect(actual).to.deep.equal(expected);
    // });
})