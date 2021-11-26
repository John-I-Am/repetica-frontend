/* eslint-disable react/jsx-props-no-spreading */
import './style.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/cardReducer';

const DeckEditor = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleAddCard = async (data: any) => {
    try {
      const response: any = await dictionaryService.getDefinition(data.word);
      const stringifiedResponse = JSON.stringify(response[0]);

      const card = {
        front: data.word,
        back: stringifiedResponse,
        level: 0,
      };
      dispatch(createCard(card));
    } catch {
      setError('word', {
        type: 'manual',
        message: 'unable to add card, check your spelling.',
      });
    }
  };

  return (
    <div className="deck-editor">
      <p>Add New Card</p>
      <form onSubmit={handleSubmit(handleAddCard)}>
        <input
          placeholder="Aardvark"
          {...register('word', {

          })}
        />
        <p className="error">{errors.word && errors.word.message}</p>
      </form>
    </div>

  );
};

export default DeckEditor;
