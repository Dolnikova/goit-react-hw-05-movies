import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Gradient, secondTextColor } from 'utilities/var';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  background-color: ${Gradient};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 0;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: ${secondTextColor};
  }
`;
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
  transform: scale(1);
  transition: transform 250ms;
  :hover {
    transform: scale(1.1);
  }
  :last-child {
    margin-right: 0;
  }
`;
