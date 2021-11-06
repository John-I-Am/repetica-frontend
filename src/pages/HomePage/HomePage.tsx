/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import { useHistory } from 'react-router';
import hero from '../../assets/hero-image.svg';
import trend from '../../assets/trend.svg';
import repeat from '../../assets/repeat.svg';
import post from '../../assets/post.svg';
import mobile from '../../assets/mobile.svg';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const history = useHistory();
  const test = '{"word":"welcome","phonetic":"ˈwɛlkəm","phonetics":[{"text":"ˈwɛlkəm","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/welcome--_gb_1.mp3"}],"origin":"Old English wilcuma  ‘a person whose coming is pleasing’, wilcumian (verb), from wil- ‘desire, pleasure’ + cuman ‘come’. The first element was later changed to wel- ‘well’, influenced by Old French bien venu or Old Norse velkominn .","meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"an instance or manner of greeting someone.","example":"you will receive a warm welcome","synonyms":["greeting","salutation","hail","welcoming","reception","warm reception","favourable reception","acceptance","hospitality","red carpet","fáilte"],"antonyms":["farewell","rebuff"]}]},{"partOfSpeech":"exclamation","definitions":[{"definition":"used to greet someone in a polite or friendly way.","example":"welcome to the Wildlife Park","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"verb","definitions":[{"definition":"greet (someone arriving) in a polite or friendly way.","example":"hotels should welcome guests in their own language","synonyms":["greet","say hello to","salute","bid someone welcome","play host/hostess to","show hospitality to","receive","meet","embrace","receive with open arms","roll out the red carpet for","fete","usher in"],"antonyms":["shun","spurn"]}]},{"partOfSpeech":"adjective","definitions":[{"definition":"(of a guest or new arrival) gladly received.","example":"re welcome","synonyms":["gladly received","wanted","appreciated","popular","desirable","acceptable","accepted"],"antonyms":["unwelcome"]},{"definition":"very pleasing because much needed or desired.","example":"after your walk, the tea room serves a welcome cuppa","synonyms":["pleasing","agreeable","encouraging","gratifying","heartening","promising","refreshing","favourable","propitious","cheering","much needed","pleasant","toaste"],"antonyms":["unpleasant","disappointing"]},{"definition":"allowed or invited to do a specified thing.","example":"we arrange a framework of activities which you are welcome to join","synonyms":[],"antonyms":[]}]}]}';
  const cardsToStudy = [{ front: 'welcome', back: test, level: 2 }];

  return (
    <div className="home-page">
      <div className="section-1">
        <div className="home-header">
          <div className="home-nav">
            <p>Repetica</p>
            <p>link1</p>
            <p>link2</p>
            <p>link3</p>
            <p>link4</p>
          </div>
          <button type="button" id="nav-button" onClick={() => history.push('/login')}>Enter Here --- </button>
        </div>
        <div className="home-main">
          <div className="title">
            <h1>Repetica</h1>
            <h2>Review.</h2>
            <h2>Repeat.</h2>
            <h2>Retain.</h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Officiis excepturi molestiae
            odit pariatur autem ab voluptatum? Doloribus
            soluta, quisquam eum dolore molestias ullam possimus
            vitae, inventore hic commodi cum illo.
            {' '}
          </p>
          <img src={hero} alt="empty deck" />
        </div>

      </div>
      <div className="section-2">
        <div className="random">
          <Card cardsToStudy={cardsToStudy} />
        </div>
        <div className="features">
          <div>
            <img src={mobile} alt="empty deck" />
            <h3>THIS IS A HEADING</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Officiis excepturi molestiae
              odit pariatur autem ab voluptatum? Doloribus
              soluta, quisquam eum dolore molestias ullam possimus
              vitae, inventore hic commodi cum illo.
              {' '}
            </p>
          </div>
          <div>
            <img src={trend} alt="empty deck" />
            <h3>THIS IS A HEADING</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Officiis excepturi molestiae
              odit pariatur autem ab voluptatum? Doloribus
              soluta, quisquam eum dolore molestias ullam possimus
              vitae, inventore hic commodi cum illo.
              {' '}
            </p>
          </div>
          <div>
            <img src={post} alt="empty deck" />
            <h3>THIS IS A HEADING</h3>
            <div>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Officiis excepturi molestiae
              odit pariatur autem ab voluptatum? Doloribus
              soluta, quisquam eum dolore molestias ullam possimus
              vitae, inventore hic commodi cum illo.
              {' '}
            </div>
          </div>
          <div>
            <img src={repeat} alt="empty deck" />
            <h3>THIS IS A HEADING</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Officiis excepturi molestiae
              odit pariatur autem ab voluptatum? Doloribus
              soluta, quisquam eum dolore molestias ullam possimus
              vitae, inventore hic commodi cum illo.
              {' '}
            </p>
          </div>
        </div>
      </div>
      <div className="section-3">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
