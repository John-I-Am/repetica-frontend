import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  const signupPageStyle = {
    display: 'flex',
    background: 'linear-gradient(135deg, rgba(176,80,214,1) 0%, rgba(133,184,222,1) 50%, rgba(17,104,121,1) 100%)',
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
