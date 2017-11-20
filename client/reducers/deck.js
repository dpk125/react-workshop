import uniqid from 'uniqid';

const initialState = {
  cards: [
    {id: uniqid(), value: 5},
    {id: uniqid(), value: 4},
  ]
};

const CARD_ADD = 'CARD_ADD';
const CARD_REMOVE = 'CARD_REMOVE';
const CARD_REMOVE_ALL = 'CARD_REMOVE_ALL';

export const addCard = (card) => ({type: CARD_ADD, payload: card});
export const removeCard = (id) => ({type: CARD_REMOVE, payload: {id} });
export const removeAllCards = () => ({type: CARD_REMOVE_ALL});

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_ADD:
      return {
        ...state,
        cards: state.cards.concat({id: uniqid(), value: 42})
      };
    case CARD_REMOVE:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.id)
      };
    case CARD_REMOVE_ALL:
      return {
        ...state,
        cards: []
      };
    default:
      return state;
  }
}