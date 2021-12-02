/* eslint-disable no-undef */
import { Button, ActionIcon } from '@mantine/core';
import parse from 'html-react-parser';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, CardWrapper, CardHeader, CardFront, CardBack, GuessForm,
} from './styles';
import { updateCard } from '../../reducers/activeDeckReducer';
import CardNote from '../CardNote/CardNote';
import speaker from '../../assets/audio.svg';

const Card = () => {
  const dispatch = useDispatch();
  const [clozeGuess, setClozeGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const cards = useSelector((state: any) => state.activeDeck.cards);
  const cardsToStudy = cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const handleIncorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 0) {
      updatedCard = { ...cardsToStudy[0], level: 0 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level - 1 };
    }
    dispatch(updateCard(updatedCard));
  };

  const handleCorrect = async () => {
    let updatedCard: any;
    if (cardsToStudy[0].level === 5) {
      updatedCard = { ...cardsToStudy[0], level: 5 };
    } else {
      updatedCard = { ...cardsToStudy[0], level: cardsToStudy[0].level + 1 };
    }
    dispatch(updateCard(updatedCard));
  };

  const handleClozeGuess = async (event: any) => {
    event.preventDefault();
    const answer = (cardsToStudy[0].auxiliary.answer).toLowerCase();

    if (answer === clozeGuess.toLowerCase() && !revealed) {
      setIsCorrect(true);
      setRevealed(true);
    } else if (answer !== clozeGuess.toLowerCase() && !revealed) {
      setClozeGuess('');
      setIsCorrect(false);
      setRevealed(true);
    }

    if (revealed && isCorrect) {
      handleCorrect();
      setRevealed(false);
    } else if (revealed && !isCorrect) {
      handleIncorrect();
      setRevealed(false);
    }
  };

  const renderAudio = (): null | JSX.Element => {
    if (cardsToStudy[0].auxiliary?.audio) {
      const audio = new Audio(cardsToStudy[0].auxiliary.audio);
      return (
        <div>
          <ActionIcon>
            <input type="image" src={speaker} onClick={() => audio.play()} alt="audio" />
          </ActionIcon>
        </div>
      );
    }
    return null;
  };

  const renderFront = () => {
    if (cardsToStudy[0].type === 'cloze') {
      return (
        <GuessForm isCorrect={isCorrect} onSubmit={handleClozeGuess}>
          <input placeholder={revealed ? cardsToStudy[0].auxiliary.answer : ''} value={clozeGuess} onChange={({ target }) => setClozeGuess(target.value)} />
        </GuessForm>
      );
    }

    return (
      cardsToStudy[0].front.texts.map((ele: any) => (
        parse(ele)
      ))
    );
  };

  return (
    <Container>
      <CardWrapper>
        <CardHeader revealed={revealed}>
          <b>{`Level ${cardsToStudy[0].level}`}</b>
          {cardsToStudy[0].type === 'cloze' ? null : (
            <div>
              <div style={{ display: revealed ? '' : 'none' }}>
                <Button onClick={handleIncorrect}>Incorrect</Button>
                <Button onClick={handleCorrect}>Correct</Button>
              </div>
              <div style={{ display: revealed ? 'none' : '' }}>
                <Button onClick={() => setRevealed(true)}>Reveal</Button>
              </div>
            </div>
          )}
          {renderAudio()}
        </CardHeader>

        <CardFront>
          {renderFront()}
        </CardFront>

        <CardBack>
          {cardsToStudy[0].back.texts.map((ele: any) => (parse(ele)))}
        </CardBack>
      </CardWrapper>

      { revealed
        ? (
          <CardNote
            examples={cardsToStudy[0].auxiliary?.examples}
            note={cardsToStudy[0].auxiliary?.note}
          />
        )
        : null}
    </Container>
  );
};

export default Card;
