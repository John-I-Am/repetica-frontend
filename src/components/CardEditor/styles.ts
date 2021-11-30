import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;

  input {
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    height: 40px;
    border-radius: 10px;
    border: none;
    background: white;
    box-sizing: border-box;
    padding-left: 20px;
    margin-left: 50px;
  }
`;

export const TitleForm = styled.form`
  input {
    text-align: center;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: whitesmoke;
  }
`;
