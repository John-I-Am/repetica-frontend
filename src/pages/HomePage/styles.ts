import styled from 'styled-components';
import { device, BLUE_PRIMARY, ORANGE_PRIMARY } from '../../constants';

export const NavBar = styled.div<any>`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  height: 50px;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  background: white;
  z-index: 1;

  img {
    width: 40px;
    height: 40px;
  }

  a {
    color: ${BLUE_PRIMARY};
    font-size: 24px;
    text-decoration: none;

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }
`;

export const SectionOne = styled.div<any>`
  height: 100vh;
  display: flex;
  padding: 5%;

  @media ${device.mobileL} {
    align-items: center;
    text-align: center;
    flex-direction: column;
  }


  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-width: 60%;
    height: auto;

    @media ${device.mobileL} {
      max-width: 100%;
  }
  }

  h2 span:nth-child(1) {
    display: inline;
    animation: slidein 5s;
    color: ${BLUE_PRIMARY};
  }

  h2 span:nth-child(2){
    display: inline;
    animation: slidein 7s;
    color: ${ORANGE_PRIMARY};
  }

  h2 span:nth-child(3) {
    display: inline;
    animation: slidein 9s;
    color: ${BLUE_PRIMARY};
  }

  @keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
  } 
`;

export const SectionTwo = styled.div<any>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const SectionThree = styled.div<any>`
  height: 100%;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20%;
    gap: 30%;

    img {
      width: 40%;
    }

    p {
      font-size: 16px;
      font-weight: 500;
    }

    @media ${device.mobileL} {
      gap: 10%;
      padding-top: 100px;
    }

  }

  @keyframes slide {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
  } 

`;
