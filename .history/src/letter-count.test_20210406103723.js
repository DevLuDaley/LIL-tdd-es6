import {expect} from 'chai'
import {getLetterCount} from './letter-count';

describe('getLetterCount - basic funtionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });

    it('return the correct letter count for a word with only one of each letter', () => {
        const expected

    })
})