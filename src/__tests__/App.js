import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../testUtils';
import App, { UnconnectedApp } from '../components/app';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});
