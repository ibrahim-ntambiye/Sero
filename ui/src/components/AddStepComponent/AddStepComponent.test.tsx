import React from 'react';
import { shallow } from 'enzyme';
import AddStepComponent from './AddStepComponent';

describe('<AddStepComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AddStepComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
