/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { RichTextEditor } from '@mantine/rte';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/activeDeckReducer';
import { Form } from './styles';
import { ExistingDeck } from '../../types';

const CardEditor = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState('...');
  const activeDeck: ExistingDeck = useSelector((state: any) => state.activeDeck);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleAddCard = async (data: any) => {
    try {
      const response: any = await dictionaryService.getDefinition(data.word);
      const examples: any = [];
      response[0].meanings.forEach((element: any) => {
        examples.push(element.definitions.map((elements: any) => elements.example)[0]);
      });
      const audio = response[0].phonetics[0]?.audio;
      const { definition } = response[0].meanings[0].definitions[0];

      const card = {
        type: 'vocab',
        deckId: activeDeck.id,
        auxiliary: { audio, examples },
        front: { texts: [data.word] },
        back: { texts: [definition] },
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
    <div>
      <Form onSubmit={handleSubmit(handleAddCard)}>
        <label htmlFor="word">Add Word</label>
        <input
          placeholder="eg. Aardvark"
          {...register('word', {

          })}
        />
        <p className="error">{errors.word && errors.word.message}</p>
      </Form>

      <RichTextEditor value={value} onChange={onChange} />
      <RichTextEditor value={value} onChange={onChange} />
    </div>

  );
};

export default CardEditor;
