import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  const signupPageStyle = {
    display: 'flex',
    background: 'linear-gradient(45deg, rgba(100,29,111,1) 0%,  rgba(8,115,184,1) 100%)',
    height: '100vh',
    justifyContent: 'center',
  };

  return (
    <div style={signupPageStyle}>
      <SignupForm />
    </div>

  );
};

export default SignupPage;
