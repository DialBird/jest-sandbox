import { actionTypes } from '../../actions';
import guessedWordsReducer from '../../reducers/guessedWordsReducer';

test('returns default initial state of `[]` when no action is passed', () => {
  const newState = guessedWordsReducer(undefined, {});
  expect(newState).toEqual([]);
});
test('returns state of true upon receiving an action of type `GUESS_WORD`', () => {
  const payload = 'hogehoge'
  const newState = guessedWordsReducer(undefined, { type: actionTypes.GUESS_WORD, payload });
  expect(newState).toEqual([payload]);
});
test('returns state of true upon receiving an action of type `GUESS_WORD`', () => {
  const payload = 'hogehoge'
  const newState = guessedWordsReducer(['a', 'b'], { type: actionTypes.GUESS_WORD, payload });
  const expected = ['b', 'a', payload];
  expect(newState).toEqual(expect.arrayContaining(expected));
});
