import React from 'react';
import { shallow } from 'enzyme';
import AddRecipeComponent from './AddRecipeComponent';

describe('<AddRecipeComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AddRecipeComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
