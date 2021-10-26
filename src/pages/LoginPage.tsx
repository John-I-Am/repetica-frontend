import LoginForm from '../components/LoginForm';

const SignupPage = () => {
  const signupPageStyle = {
    display: 'flex',
    background: 'linear-gradient(45deg, rgba(200,29,111,0.8) 0%, rgba(151,208,236,0.8) 100%)',
    height: '100vh',
    justifyContent: 'center',
  };

  return (
    <div style={signupPageStyle}>
      <LoginForm />
    </div>

  );
};

export default SignupPage;
