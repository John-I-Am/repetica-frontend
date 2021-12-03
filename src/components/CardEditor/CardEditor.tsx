/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { RichTextEditor } from '@mantine/rte';
import { Button, Checkbox } from '@mantine/core';
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
  const [auxiliary, setAuxiliary] = useState({
    audio: '', examples: [], note: '', answer: '',
  });
  const [cloze, setCloze] = useState(false);

  const [test, setTest] = useState('');

  const activeDeck: ExistingDeck = useSelector((state: any) => state.activeDeck);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const {
    register: registerCloze,
    handleSubmit: handleSubmitCloze,
    formState: { errors: clozeErrors },
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
      setFront(data.word);
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
        type: cloze ? 'cloze' : 'vocab',
        deckId: activeDeck.id,
        auxiliary,
        front: { texts: [front] },
        back: { texts: [back] },
        level: 0,
      };
      card.auxiliary.note = note;
      card.auxiliary.answer = test;
      dispatch(createCard(card));
    } catch {
      console.log('something went wrong');
    }
  };

  const handleSetCloze = async (data: any) => {
    setTest(data.cloze);
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
      <Checkbox label="Cloze" onChange={(event) => setCloze(event.currentTarget.checked)} />
      {cloze ? (
        <Form onSubmit={handleSubmitCloze(handleSetCloze)}>
          <label htmlFor="word">set answer key</label>
          <input
            placeholder="answer key"
            {...registerCloze('cloze', {

            })}
          />
          <p className="error">{clozeErrors.cloze && clozeErrors.cloze.message}</p>
        </Form>
      ) : null}

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
