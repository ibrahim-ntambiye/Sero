import React from 'react';
import { shallow } from 'enzyme';
import InputComponent from './InputComponent';

describe('<InputComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
