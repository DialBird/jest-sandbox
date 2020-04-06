import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../testUtils';
import App, { UnconnectedApp } from '../components/app';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
  });
});

describe('redux props', () => {
  test('has success state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has guessedWords state', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'hoge', letterMatchCount: 1 }
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('has secretWord state', () => {
    const secretWord = 'happy';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('getSecretWord action is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe('mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }

  shallow(<UnconnectedApp {...props} />);

  expect(getSecretWordMock.mock.calls.length).toBe(1);
});
