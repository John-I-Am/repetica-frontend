import Card from '../components/Card';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const homePageStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'GhostWhite',
    height: '100vh',
  };

  return (
    <div style={homePageStyle}>
      <Card />
      <NavBar />
    </div>
  );
};

export default HomePage;
