import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  // scope component variable to be able
  // to be used in other tests
  let component;

  beforeEach(() => {
    // use renderComponent from test_helper to create
    // an instance of CommentBox
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    // check component to have css class 'comment-box'
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // check if component has textarea
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    // check if component has a button
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {

    });
  });

});
