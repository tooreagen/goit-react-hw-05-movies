import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border-style: none;
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  border-style: none;
  background-color: lightgray;

  :hover,
  :focus {
    color: grey;
  }
`;
