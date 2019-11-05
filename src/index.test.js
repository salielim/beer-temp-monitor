import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('renders the inner Counter', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find(Counter).length).toEqual(1);
  // });
});
