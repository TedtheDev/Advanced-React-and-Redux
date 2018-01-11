import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer',() => {

    it('handles action with uknown type', () => {
        // Either way will work, but eql() deeply checks
        // and makes sure that it is really empty and not just an Array
        //expect(commentReducer(undefined, {})).to.be.an.instanceof(Array);
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'New Comment' };
        expect(commentReducer([], action)).to.eql(['New Comment']);
    });
});