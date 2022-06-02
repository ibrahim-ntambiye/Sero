import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from './SearchComponent';

describe('<SearchComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
