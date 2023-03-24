import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, NavigationLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};
