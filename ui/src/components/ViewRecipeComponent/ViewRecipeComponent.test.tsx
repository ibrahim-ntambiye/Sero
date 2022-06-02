import React from 'react';
import { shallow } from 'enzyme';
import ViewRecipeComponent from './ViewRecipeComponent';

describe('<ViewRecipeComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ViewRecipeComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
