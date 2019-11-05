import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './app';
import { Table } from './components/table';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Table />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
