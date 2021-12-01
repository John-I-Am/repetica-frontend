import cardsService from '../services/cards';
import { initializeDecks } from './deckReducer';

const activeDeckReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return action.data;
    case 'CLEAR_ACTIVE_DECK':
      return {};
    case 'CREATE_CARD':
      return { ...state, cards: state.cards.concat(action.data) };
    case 'UPDATE_CARD': {
      const newCards = state.cards.map((card: any) => (
        card.id === action.data.id ? action.data : card
      ));
      return { ...state, cards: newCards };
    }
    case 'REMOVE_CARD':
      return { ...state, cards: state.cards.filter((card: any) => card.id !== action.data) };
    default:
      return state;
  }
};

export const setActive = (deck: any) => async (dispatch: any) => {
  dispatch({
    type: 'SET_ACTIVE',
    data: deck,
  });
};

export const createCard = (card: any) => async (dispatch: any) => {
  try {
    const newCard = await cardsService.create(card);
    dispatch({
      type: 'CREATE_CARD',
      data: newCard,
    });
    dispatch(initializeDecks());
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
    dispatch(initializeDecks());
  } catch (e) {
    console.log(e);
  }
};

export const removeCard = (cardToRemove: any) => async (dispatch: any) => {
  try {
    await cardsService.remove(cardToRemove.id);
    dispatch({
      type: 'REMOVE_CARD',
      data: cardToRemove.id,
    });
    dispatch(initializeDecks());
  } catch (e) {
    console.log(e);
  }
};

export const clearActiveDeck = () => ({ type: 'CLEAR_ACTIVE_DECK' });

export default activeDeckReducer;
