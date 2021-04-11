import { expect } from 'chai';
import { anagrams, isAnagram} from './anagrams';

 
describe('isAnagram', () => {
    it('should return true if the two words are anagrams', () => {
        const expected = ('cat', 'tac');
        const actual = isAnagram('cat', 'tac');
        expect(actual).to.deep.equal(true);
    });
    
    it('should return false if the two words are anagrams', () => {
        const expected = ('cat', 'tac');
        const actual = isAnagram('cat', 'tacg');
        expect(actual).to.deep.equal(false);
    });
})