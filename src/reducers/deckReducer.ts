import decksService from '../services/decks';

const deckReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'INITIALIZE_DECK':
      return action.data;
    case 'CREATE_DECK':
      return state.concat(action.data);
    case 'UPDATE_DECK':
      return state.map((deck: any) => ((deck.id === action.data.id) ? action.data : deck));
    case 'REMOVE_DECK':
      return state.filter((deck: any) => deck.id !== action.data);
    case 'CLEAR_DECK':
      return [];
    default:
      return state;
  }
};

export const initializeDecks = () => async (dispatch: any) => {
  try {
    const decks = await decksService.getAll();
    await dispatch({
      type: 'INITIALIZE_DECK',
      data: decks,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createDeck = () => async (dispatch: any) => {
  try {
    const newDeck = await decksService.create();
    dispatch({
      type: 'CREATE_DECK',
      data: newDeck,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateDeck = (deck: any) => async (dispatch: any) => {
  try {
    const newDeck = await decksService.update(deck);
    dispatch({
      type: 'UPDATE_DECK',
      data: newDeck,
    });
  } catch (e: any) {
    console.log(e);
  }
};

export const removeDeck = (id: any) => async (dispatch: any) => {
  try {
    await decksService.remove(id);
    dispatch({
      type: 'REMOVE_DECK',
      data: id,
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearDeck = () => ({ type: 'CLEAR_DECK' });

export default deckReducer;
