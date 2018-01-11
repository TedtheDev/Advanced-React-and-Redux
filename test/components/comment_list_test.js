import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    // these props represent state because we are mapping state to props,
    // therefore we call it props
    const props = { comments: ['New Comment', 'Other New Comment'] };

    beforeEach(()=> {
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI tag for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        // checking exact LI with the exact text
        expect(component.find('li:nth-child(1)')).to.have.text(props.comments[0]);
        expect(component.find('li:nth-child(2)')).to.have.text(props.comments[1]);

        // another way to check, dirty way to check if there
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });
});