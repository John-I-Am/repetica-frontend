import styled from 'styled-components';
import { device, BLUE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ghostwhite;
  padding: 10px 10px 10px 60px;

  @media ${device.mobileL} {
    padding: 60px 10px 10px 10px;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;

    label {
    font-size: 12px;
    padding-left: 20px;
    width: 70%;
   }

   input {
      height: 40px;
      width: 70%;
      border: 1px solid grey;
      border-radius: 10px;
      box-sizing: border-box;
      padding-left: 20px;
   }
`;

export const Header = styled.div`
    text-align: center;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid grey;
  padding-bottom: 5%;
  padding-top: 5%;
  font-size: 14px;

  :last-of-type {
    border-bottom: none;
     
     input {
       width: 50px;
       height: 20px;
       padding: 0px;
   }
  }
  
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionHeader = styled.div`
    color: ${BLUE_PRIMARY};
    width: 30%;
    display: flex;
    padding: 0;
    flex-flow: column;

    @media ${device.mobileL} {
      align-items: center;
      width: 80%;
  }
`;
