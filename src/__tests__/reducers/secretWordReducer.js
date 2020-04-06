import { actionTypes } from '../../actions';
import secretWordReducer from '../../reducers/secretWordReducer';

test('returns default initial state of `null` when no action is passed', () => {
  const newState = secretWordReducer(undefined, {});
  expect(newState).toBe(null);
});
test('returns state of true upon receiving an action of type `SET_SECRET_WORD`', () => {
  const payload = 'keisuke';
  const newState = secretWordReducer(undefined, { type: actionTypes.SET_SECRET_WORD, payload });
  expect(newState).toBe(payload);
});
