import styled from 'styled-components';
import { device, ORANGE_PRIMARY, PURPLE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100%;

  @media ${device.mobileL} {
    padding-top: 60px;
    height: 100%;
  }
`;

export const Cardd = styled.div`
  max-height: 60%;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  background: white;
  border-radius: 20px;
  padding: 5%;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
    color: ${ORANGE_PRIMARY};

    @media ${device.mobileL} {

      img {
        width: 24px;
      }
  }
`;

export const CardFront = styled.div`
    display: flex;
    height: 30%;
    align-items: center;
    justify-content: center;
    padding: 5%;
    border-bottom: 1px black solid;
    overflow: scroll;

    input {
      width: 100%;
      border: none;
      justify-content: center;
      text-align: center;
      font-size: 52px;
      background:  #f0f0f5;


      @media ${device.mobileL} {
        font-size: 24px;
      }
    }
`;

export const CardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  overflow: scroll;
  padding: 5%;
  gap: 20px;

    @media ${device.mobileL} {
      padding: 100px 24px 0px 24px;
      flex-direction: column;
      align-items: flex-start;
    } 

    div {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      align-items: flex-start;

      div {
        color: ${PURPLE_PRIMARY};
      }
    }
`;
