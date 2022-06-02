import React from 'react';
import { shallow } from 'enzyme';
import RecipeComponent from './RecipeComponent';

describe('<RecipeComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RecipeComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
