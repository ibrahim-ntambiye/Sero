import React from 'react';
import { shallow } from 'enzyme';
import SearchCriteriaSelectComponent from './SearchCriteriaSelectComponent';

describe('<SearchCriteriaSelectComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchCriteriaSelectComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
