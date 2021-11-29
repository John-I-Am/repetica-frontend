/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { device, PURPLE_PRIMARY, ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ghostwhite;
  height: 100vh;
  padding: 10px 10px 10px 60px;

  @media only screen and (max-width: 600px) {
    padding: 60px 10px 10px 10px;
  }
`;

export const NoCards = styled.form`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
