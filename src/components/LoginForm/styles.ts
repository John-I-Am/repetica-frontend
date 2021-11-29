import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 450px;
  padding: 50px;
  border-radius: 30px;
  background: white;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

export const Header = styled.div`
  text-align: center;

  p {
    font-size: 12px;
    line-height: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  justify-content: center;

  input {
    height: 40px;
    width: 100%;
    border-radius: 10px;
    border: none;
    background: whitesmoke;
    box-sizing: border-box;
    padding-left: 20px;
  }

  input::placeholder {
    font-style: italic;
    font-size: 12px;
  }

  label {
    font-size: 12px;
    padding-left: 20px;
  }
`;
