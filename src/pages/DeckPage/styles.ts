/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { device, PURPLE_PRIMARY, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ghostwhite;
  gap: 50px;
  height: 100vh;
  padding: 10px 10px 10px 60px;

  @media ${device.mobileL} {
    padding: 60px 10px 10px 10px;
  }
`;

export const NoCards = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
