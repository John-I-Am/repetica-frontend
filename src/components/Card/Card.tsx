/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@mantine/core';
import parse from 'html-react-parser';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Cardd, CardHeader, CardFront, CardBack,
} from './styles';
import { updateCard } from '../../reducers/activeDeckReducer';
import CardNote from '../CardNote/CardNote';
import speaker from '../../assets/audio.svg';

const Card = () => {
  const dispatch = useDispatch();
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const CardNoteRef: any = useRef();

  const cards = useSelector((state: any) => state.activeDeck.cards);
  const cardsToStudy = cards.filter((card: any) => (
    new Date(card.checkpointDate)).getTime() <= new Date().getTime());

  const handleStyling = (result: boolean) => {
    const word: any = document.getElementById('guess-input');
    word.disabled = true;

    if (result) {
      word.style.color = 'green';
    } else {
      word.style.color = 'red';
      setGuess(cardsToStudy[0].front.texts[0]);
    }

    if (revealed) {
      word.disabled = false;
      setGuess('');
      word.style.color = 'black';
    }
  };

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

  const handleGuess = async (event: any) => {
    event.preventDefault();
    const answer = (cardsToStudy[0].front.texts[0]).toLowerCase();

    if (answer === guess.toLowerCase() && !revealed) {
      setIsCorrect(true);
      handleStyling(true);
      setRevealed(true);
    } else if (answer !== guess.toLowerCase() && !revealed) {
      setIsCorrect(false);
      handleStyling(false);
      setRevealed(true);
    }

    if (revealed && isCorrect) {
      handleCorrect();
      setRevealed(false);
      handleStyling(true);
    } else if (revealed && !isCorrect) {
      handleIncorrect();
      setRevealed(false);
      handleStyling(true);
    }

    CardNoteRef.current.toggleVisibility();
  };

  const play = () => {
    const audio: any = document.getElementById('audio');
    audio.play();
  };

  const renderAudio = () => {
    if (cardsToStudy[0].auxiliary?.audio) {
      return (
        <div>
          <img onClick={play} src={speaker} alt="audio" />
          <audio id="audio" src={cardsToStudy[0].auxiliary.audio} />
        </div>
      );
    }
    return null;
  };

  const renderFront = () => {
    if (cardsToStudy[0].type === 'cloze') {
      return (
        <form onSubmit={handleGuess}>
          <input id="guess-input" value={guess} onChange={({ target }) => setGuess(target.value)} />
        </form>
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
      <Cardd>
        <CardHeader>
          <b>{`Level ${cardsToStudy[0].level}`}</b>
          <Button onClick={handleIncorrect}>Incorrect </Button>
          <Button onClick={handleCorrect}>Correct </Button>
          {renderAudio()}
        </CardHeader>
        <CardFront>
          {renderFront()}
        </CardFront>
        <CardBack>
          {cardsToStudy[0].back.texts.map((ele: any) => (
            parse(ele)
          ))}
        </CardBack>
      </Cardd>
      <CardNote
        examples={cardsToStudy[0].auxiliary?.examples}
        note={cardsToStudy[0].auxiliary?.note}
        ref={CardNoteRef}
      />
    </Container>
  );
};

export default Card;
