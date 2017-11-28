import { List } from 'immutable';
import { constants } from '../../constants';

const initialState = List([]);
let nextCard = 0;

const cards = (state = initialState, action) => {
  switch (action.type) {
    case constants.cards.ADD:
      return state.push({ id: nextCard++, ...action.payload.card });
    case constants.cards.REMOVE:
      return state.filter(card => card.id !== action.payload.card.id);
    case constants.cards.REMOVE_ALL:
      return List([]);
    default:
      return state;
  }
};

export default cards;
