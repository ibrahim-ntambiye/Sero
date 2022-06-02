import React from 'react';
import { shallow } from 'enzyme';
import AddIngredientComponent from './AddIngredientComponent';

describe('<AddIngredientComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AddIngredientComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
