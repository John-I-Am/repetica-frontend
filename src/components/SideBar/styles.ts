import styled from 'styled-components';
import { device } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  height: 100%;
  background: white;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  width: 50px;

  @media ${device.mobileL} {
    height: 40px;
    width: 100%;
    flex-direction: row;
    padding-left: 20px;
  }

  img {
    width: 26px;

    @media ${device.mobileL} {
      width: 24px;
    }
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 20px;

  @media ${device.mobileL} {
    width: 100%;
    flex-direction: row;
    padding-right: 20px;
    padding-bottom: 0;
  }
`;
