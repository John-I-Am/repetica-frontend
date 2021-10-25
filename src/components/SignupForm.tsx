/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SignupForm = () => {
  const signupFormStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    height: '500px',
    width: '450px',
    marginTop: '10%',
    borderRadius: '30px',
    background: 'white',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
  };

  const formStyle = {
    display: 'flex',
    height: '100%',
    width: '80%',
    paddingLeft: '50px',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-evenly',
  };

  const inputStyle = {
    height: '40px',
    width: '80%',
    borderRadius: '30px',
    border: 'none',
    background: 'WhiteSmoke',
    paddingLeft: '20px',
  };

  const innerForm = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
  };

  const buttonStyle = {
    height: '40px',
    width: '87%',
    fontSize: '16px',
    borderRadius: '30px',
    border: 'none',
    background: 'orange',
  };

  return (
    <div style={signupFormStyle}>
      <div>
        <h1>Create Account</h1>
        <p>Already registered? Log in here</p>
      </div>

      <form style={formStyle}>
        <div style={innerForm}>
          <div>
            <label htmlFor="name">First Name</label>
            <input
              style={inputStyle}
              id="name"
              value=""
              placeholder="name"
            />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              style={inputStyle}
              id="surname"
              value=""
              placeholder="surname"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              style={inputStyle}
              id="email"
              value=""
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              style={inputStyle}
              id="password"
              type="password"
              value=""
              placeholder="password"
            />
          </div>

        </div>
        <button style={buttonStyle} id="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
