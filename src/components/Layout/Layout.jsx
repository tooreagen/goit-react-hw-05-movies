import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, NavigationLink } from './Layout.styled';
import { Suspense } from 'react';
import Loading from 'components/Loading/Loading';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
