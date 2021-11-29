/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, TitleForm } from './styles';
import dictionaryService from '../../services/dictionary';
import { createCard } from '../../reducers/activeDeckReducer';
import { initializeDecks, removeDeck, updateDeck } from '../../reducers/deckReducer';

const DeckEditor = () => {
  const [opened, setOpened] = useState(false);
  const activeDeck = useSelector((state: any) => state.activeDeck);
  const dispatch = useDispatch();

  const display = activeDeck.title === undefined ? { display: 'none' } : { display: '' };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const {
    register: registerTitle,
    handleSubmit: handleSubmitTitle,
    formState: { errors: errorsTitle },
  } = useForm();

  const handleAddCard = async (data: any) => {
    try {
      const response: any = await dictionaryService.getDefinition(data.word);
      const stringifiedResponse = JSON.stringify(response[0]);

      const card = {
        deckId: activeDeck._id,
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

  const handleChangeTitle = (data: any) => {
    dispatch(updateDeck({ ...activeDeck, title: data.title }));
  };

  const handleDeleteDeck = () => {
    dispatch(removeDeck(activeDeck._id));
    dispatch(initializeDecks());
  };

  return (
    <Container>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Form style={display} onSubmit={handleSubmit(handleAddCard)}>
          <label htmlFor="word">Add New word</label>
          <input
            placeholder="eg. Aardvark"
            {...register('word', {

            })}
          />
          <p className="error">{errors.word && errors.word.message}</p>
        </Form>
      </Modal>

      <Button style={display} onClick={() => setOpened(true)}>Add</Button>

      <TitleForm style={display} onSubmit={handleSubmitTitle(handleChangeTitle)}>
        <input
          defaultValue={activeDeck.title}
          {...registerTitle('title', {
            required: 'required',
            pattern: {
              value: /^[a-zA-Z1-9]{1,10}$/i,
              message: 'length exceeded / invalid characters',
            },
          })}
        />
        <p className="error">{errorsTitle.title && errorsTitle.title.message}</p>
      </TitleForm>
      <Button style={display} onClick={handleDeleteDeck}>delete</Button>

    </Container>

  );
};

export default DeckEditor;
