import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 12px;
  
  
`;

export const NavigationLink = styled(NavLink)`
  padding: 5px 10px;
  font-weight: 700;
  background-color: lightgray;
  border-radius: 5px;

  &.active {
    background-color: lightcoral;
  }
`;

