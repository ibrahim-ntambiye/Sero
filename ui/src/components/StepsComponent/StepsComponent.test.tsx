import React from 'react';
import { shallow } from 'enzyme';
import StepsComponent from './StepsComponent';

describe('<StepsComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StepsComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
