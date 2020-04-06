import moxios from 'moxios';

import { storeFactory } from '../../testUtils';
import { getSecretWord } from '../../actions';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('adds response word to state', () => {
    const answer = 'party';
    const secretWord = { answer };
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: secretWord });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(answer);
    });
  });
});
