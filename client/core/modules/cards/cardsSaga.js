import { takeEvery, call, put, all } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { addCard } from '../../../core/modules/cards/cardsActions';
import { getCardValue } from '../../../core/modules/cards/cardsHelpers';
import axios from 'axios';

function* onRequestCard() {
  const { data } = yield call(() => axios.get('https://deckofcardsapi.com/api/deck/new/draw/'));

  const { image, value } = data.cards[0];
  const card = { image, value: getCardValue(value) };

  yield put(addCard(card));
}

export default function* sessionSaga() {
  yield all([
    takeEvery(constants.cards.REQUEST, onRequestCard),
  ]);
}
