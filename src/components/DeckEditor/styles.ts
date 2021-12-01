import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`  
  display: flex;
  flex-wrap: wrap;
  background: white;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px ghostwhite solid;
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

export const TableFront = styled.td`
  color: ${ORANGE_PRIMARY};
  background: #303030;
`;
