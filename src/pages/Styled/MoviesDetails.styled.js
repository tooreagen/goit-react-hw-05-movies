import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  margin-top: 10px;
  display: inline-block;
  padding: 2px 10px;
  font-weight: 500;
  background-color: lightgray;
  border-radius: 5px;
`;

export const Scope = styled.p`
  margin-top: 10px;
`;

export const GenresItem = styled.p`
  display: inline-block;
    :not(:last-child) {
    margin-right: 5px;
  }
`;

export const MovieHeaderH4 = styled.h4`
margin:10px 0;
`;

export const MovieHeaderH3 = styled.h3`
margin:10px 0;
`;

export const MovieBlock = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const AddInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
