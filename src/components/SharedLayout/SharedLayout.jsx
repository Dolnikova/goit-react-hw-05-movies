import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  NavigationItem,
  NavigationList,
} from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavigationList>
          <NavigationItem>
            <Link to="/" end>
              Home
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/movies">Movies</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Outlet />
    </Container>
  );
};
