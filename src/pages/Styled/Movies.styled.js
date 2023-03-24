import styled from 'styled-components';

export const MoviesList = styled.ul`
  margin-top: 20px;
`;

export const MoviesItem = styled.ul`
  :not(:first-child) {
    margin-top: 3px;
  }
`;
