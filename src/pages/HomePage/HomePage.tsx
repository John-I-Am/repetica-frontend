/* eslint-disable import/no-extraneous-dependencies */
import './styles.ts';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { Button, Title } from '@mantine/core';
import {
  NavBar, SectionOne, SectionTwo, SectionThree,
} from './styles';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.svg';
import trend from '../../assets/trend.svg';
import science from '../../assets/science.svg';
import post from '../../assets/post.svg';
import mobile from '../../assets/mobile.svg';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { setActive } from '../../reducers/activeDeckReducer';

const HomePage = () => {
  const history = useHistory();

  const test = '{"word":"test","phonetic":"tɛst","phonetics":[{"text":"tɛst","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/test--_gb_1.mp3"}],"origin":"late Middle English (denoting a cupel used to treat gold or silver alloys or ore): via Old French from Latin testu, testum ‘earthen pot’, variant of testa ‘jug, shell’. Compare with test2. The verb dates from the early 17th century.","meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.","example":"both countries carried out nuclear tests in May","synonyms":["trial","experiment","pilot study","try-out","check","examination","assessment","evaluation","appraisal","investigation","inspection","analysis","scrutiny","scrutinization","study","probe","exploration","screening","audition","screen test","assay"],"antonyms":[]},{"definition":"short for Test match.","example":"the first Test against New Zealand","synonyms":[],"antonyms":[]},{"definition":"a movable hearth in a reverberating furnace, used for separating gold or silver from lead.","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"verb","definitions":[{"definition":"take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.","example":"this range has not been tested on animals","synonyms":["try out","trial","carry out trials on","put to the test","put through its paces","experiment with","pilot","check","examine","assess","evaluate","appraise","investigate","analyse","scrutinize","study","probe","explore","sample","screen","assay"],"antonyms":[]}]}]}';
  const cardsToStudy = [{
    front: 'test', back: test, level: 4, checkpointDate: new Date(),
  }];
  const dispatch = useDispatch();
  dispatch(setActive({ cards: cardsToStudy }));

  return (
    <div className="home-page">
      <NavBar>
        <a href="#section-1">
          <img src={logo} alt="logo" />
        </a>
        <a href="#section-2">Demo</a>
        <a href="#section-3">Features</a>
        <Button type="button" onClick={() => history.push('/login')}> Log in </Button>
      </NavBar>

      <SectionOne id="section-1">
        <div>
          <Title order={1}> Repetica - A Modern Spaced Repetition System </Title>
          <Title order={2}>
            <span>Review.</span>
            {' '}
            <span>Repeat.</span>
            {' '}
            <span>Retain.</span>
            {' '}
          </Title>
        </div>
        <img src={hero} alt="hero" />
      </SectionOne>

      <SectionTwo id="section-2">
        <Card />
      </SectionTwo>

      <SectionThree id="section-3">
        <div>
          <img src={trend} alt="graph" />
          <p>
            Advanced statistical tools to help you track your progress and
            identify trouble areas.
          </p>
        </div>

        <div>
          <p>
            Advanced Spaced-repetition algorithm backed by decades of research
            to help you learn more effectively.
          </p>
          <img src={science} alt="graph" />
        </div>
        <div>
          <img src={post} alt="graph" />
          <p>
            Customizable cards to match your learning style.

          </p>
        </div>
        <div>
          <p>
            Study anytime, anywhere, with our on-the-cloud infrastructure.
          </p>
          <img src={mobile} alt="graph" />
        </div>
      </SectionThree>

      <Footer />

    </div>
  );
};

export default HomePage;
