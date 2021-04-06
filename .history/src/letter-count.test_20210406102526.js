import {expect} from 'chai'
import {getLetterCount} from './letter-count';

describe('getLetterCount - basic funtionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('word');
        expect(actual).to.deep.equal(expected);
    })
})