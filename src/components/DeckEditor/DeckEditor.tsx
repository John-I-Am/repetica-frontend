/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Container, TitleForm } from './styles';
import { initializeDecks, removeDeck, updateDeck } from '../../reducers/deckReducer';
import CardEditor from '../CardEditor/CardEditor';

const DeckEditor = () => {
  const [opened, setOpened] = useState(false);
  const activeDeck = useSelector((state: any) => state.activeDeck);
  const dispatch = useDispatch();

  const display = activeDeck.title === undefined ? { display: 'none' } : { display: '' };

  const {
    register: registerTitle,
    handleSubmit: handleSubmitTitle,
    formState: { errors: errorsTitle },
  } = useForm();

  const handleChangeTitle = (data: any) => {
    dispatch(updateDeck({ ...activeDeck, title: data.title }));
  };

  const handleDeleteDeck = () => {
    dispatch(removeDeck(activeDeck.id));
    dispatch(initializeDecks());
  };

  return (
    <Container>
      <Modal size="xl" opened={opened} onClose={() => setOpened(false)}>
        <CardEditor />
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
