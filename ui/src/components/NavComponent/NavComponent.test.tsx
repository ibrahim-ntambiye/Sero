import React from 'react';
import { shallow } from 'enzyme';
import NavComponent from './NavComponent';

describe('<NavComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
