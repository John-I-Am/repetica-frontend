import './style.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/cardReducer';
import { setError } from '../../reducers/errorReducer';

const DeckEditor = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.error);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response: any = await dictionaryService.getDefinition(text);
      const stringifiedResponse = JSON.stringify(response[0]);

      const card = {
        front: text,
        back: stringifiedResponse,
        level: 1,
      };
      dispatch(createCard(card));
    } catch {
      dispatch(setError('Unable to add card: check your spelling'));
      setTimeout(() => dispatch(setError('')), 3000);
    }
  };

  return (
    <div className="deck-editor">
      <div id="error">
        {error}
      </div>
      <h1>Add cards here</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={({ target }) => setText(target.value)} placeholder="eg. Aardvark" />
      </form>
    </div>

  );
};

export default DeckEditor;
