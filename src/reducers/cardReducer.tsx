import cardsService from '../services/cards';

const cardReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'INITIALIZATION':
      return action.data;
    case 'CREATE_CARD':
      return state.concat(action.data);
    case 'CLEAR_CARD':
      return [];
    default:
      return state;
  }
};

export const initializeCards = () => async (dispatch: any) => {
  try {
    const cards = await cardsService.getAll();
    dispatch({
      type: 'INITIALIZATION',
      data: cards,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createCard = (card: any) => async (dispatch: any) => {
  try {
    const newCard = await cardsService.create(card);
    dispatch({
      type: 'CREATE_CARD',
      data: newCard,
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearCard = () => ({ type: 'CLEAR_CARD' });

export default cardReducer;
