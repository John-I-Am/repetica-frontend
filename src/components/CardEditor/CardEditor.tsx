/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { RichTextEditor } from '@mantine/rte';
import { Button } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/activeDeckReducer';
import { Form, Container } from './styles';
import { ExistingDeck } from '../../types';

const CardEditor = () => {
  const dispatch = useDispatch();
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [note, setNote] = useState('');
  const [auxiliary, setAuxiliary] = useState({ audio: '', examples: [], note: '' });

  const activeDeck: ExistingDeck = useSelector((state: any) => state.activeDeck);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const parseDictionary = async (data: any) => {
    try {
      const response: any = await dictionaryService.getDefinition(data.word);
      const examples: any = [];
      response[0].meanings.forEach((element: any) => {
        examples.push(element.definitions.map((elements: any) => elements.example)[0]);
      });
      const audio = response[0].phonetics[0]?.audio;
      const { definition } = response[0].meanings[0].definitions[0];

      setAuxiliary({ ...auxiliary, audio, examples });
      setFront('word');
      setBack(definition);
    } catch {
      setError('word', {
        type: 'manual',
        message: 'unable to add card, check your spelling.',
      });
    }
  };

  const handleAddCard = async () => {
    try {
      const card = {
        type: 'vocab',
        deckId: activeDeck.id,
        auxiliary,
        front: { texts: [front] },
        back: { texts: [back] },
        level: 0,
      };
      card.auxiliary.note = note;
      dispatch(createCard(card));
    } catch {
      console.log('something went wrong');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(parseDictionary)}>
        <label htmlFor="word">Word Auto Generator</label>
        <input
          placeholder="eg. Aardvark"
          {...register('word', {

          })}
        />
        <p className="error">{errors.word && errors.word.message}</p>
      </Form>
      <h2>Front</h2>
      <RichTextEditor value={front} onChange={setFront} />
      <h2>Back</h2>
      <RichTextEditor value={back} onChange={setBack} />
      <h2>Note</h2>
      <RichTextEditor value={note} onChange={setNote} />
      <Button onClick={handleAddCard}>Create</Button>
    </Container>

  );
};

export default CardEditor;
