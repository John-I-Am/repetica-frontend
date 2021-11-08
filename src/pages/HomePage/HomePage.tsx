/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import { Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.svg';
import trend from '../../assets/trend.svg';
import repeat from '../../assets/repeat.svg';
import post from '../../assets/post.svg';
import mobile from '../../assets/mobile.svg';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const history = useHistory();

  const test = '{"word":"test","phonetic":"tɛst","phonetics":[{"text":"tɛst","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/test--_gb_1.mp3"}],"origin":"late Middle English (denoting a cupel used to treat gold or silver alloys or ore): via Old French from Latin testu, testum ‘earthen pot’, variant of testa ‘jug, shell’. Compare with test2. The verb dates from the early 17th century.","meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.","example":"both countries carried out nuclear tests in May","synonyms":["trial","experiment","pilot study","try-out","check","examination","assessment","evaluation","appraisal","investigation","inspection","analysis","scrutiny","scrutinization","study","probe","exploration","screening","audition","screen test","assay"],"antonyms":[]},{"definition":"short for Test match.","example":"the first Test against New Zealand","synonyms":[],"antonyms":[]},{"definition":"a movable hearth in a reverberating furnace, used for separating gold or silver from lead.","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"verb","definitions":[{"definition":"take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.","example":"this range has not been tested on animals","synonyms":["try out","trial","carry out trials on","put to the test","put through its paces","experiment with","pilot","check","examine","assess","evaluate","appraise","investigate","analyse","scrutinize","study","probe","explore","sample","screen","assay"],"antonyms":[]}]}]}';
  const cardsToStudy = [{ front: 'test', back: test, level: 4 }];

  return (
    <div className="home-page">
      <Navbar collapseOnSelect sticky="top" expand="sm" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-center">
              <Nav.Link className="px-5" href="#a">Home</Nav.Link>
              <Nav.Link className="px-5" href="#b">About</Nav.Link>
              <Button type="button" onClick={() => history.push('/login')}> Log in </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="home-page__section-one">
        <div className="home-page__section-one__title">
          <h1>
            Repetica - A Modern Spaced Repetition System
          </h1>
          <h2>
            <span>Review.</span>
            {' '}
            <span>Repeat.</span>
            {' '}
            <span>Retain.</span>
            {' '}
          </h2>
        </div>
        <img src={hero} alt="hero" />
      </div>

      <div className="home-page__section-two">
        <Card cardsToStudy={cardsToStudy} />
      </div>

      <div className="home-page__section-three">
        <div className="home-page__section-three__features">
          <img src={trend} alt="graph" />
          <h2>Trends</h2>
          <p>Detailed report of your learning progress</p>
        </div>
        <div className="home-page__section-three__features">
          <img src={repeat} alt="repeats" />
          <h2>Smart Interval</h2>
          <p>Advanced algorithm to help you learn efficiently</p>
        </div>
        <div className="home-page__section-three__features">
          <img src={post} alt="card" />
          <h2>Adaptible</h2>
          <p>Highly customizable cards to suit your learning style</p>
        </div>
        <div className="home-page__section-three__features">
          <img src={mobile} alt="mobile" />
          <h2>Mobile</h2>
          <p>Cloud based infrastructure to help you study on the go</p>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default HomePage;
