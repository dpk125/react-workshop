import { constants } from '../../constants';

export const requestCard = () => {
  return {
    type: constants.cards.REQUEST,
    payload: {}
  }
};

export const addCard = (card) => {
  return {
    type: constants.cards.ADD,
    payload: {
      card
    }
  }
};

export const removeCard = (card) => {
  return {
    type: constants.cards.REMOVE,
    payload: {
      card
    }
  }
};

export const removeAllCards = () => {
  return {
    type: constants.cards.REMOVE_ALL
  }
};
