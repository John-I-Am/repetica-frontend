import cardsService from '../services/cards';

const cardReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'INITIALIZATION':
      return action.data;
    case 'CREATE_CARD':
      return state.concat(action.data);
    case 'UPDATE_CARD': {
      const newState: any = state.map((card: any) => (
        card.id === action.data.id ? action.data : card));
      return newState;
    }
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

export const updateCard = (cardToUpdate: any) => async (dispatch: any) => {
  try {
    const updatedCard = await cardsService.update(cardToUpdate);
    dispatch({
      type: 'UPDATE_CARD',
      data: updatedCard,
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearCard = () => ({ type: 'CLEAR_CARD' });

export default cardReducer;
