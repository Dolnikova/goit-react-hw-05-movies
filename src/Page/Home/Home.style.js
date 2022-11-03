import styled from 'styled-components';
import { TextColor, MainBgColor } from 'styles/vars';

export const Title = styled.h1`
  display: flex;
  justify-content: space-around;
  color: ${TextColor};
  font-size: 35px;
  padding: 20px 0 20px 0;
`;
export const Main = styled.main`
  background-color: ${MainBgColor};
`;
export const Item = styled.li`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: calc((100% - 4 * 10px) / 2);
    margin: 10px;
  }
  @media (min-width: 1440px) {
    width: calc((100% - 6 * 10px) / 3);
  }
`;
export const Poster = styled.img`
  width: 450px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: 350px;
  }
`;
export const Box = styled.ul`
  color: ${TextColor};
  display: flex;
  flex-wrap: wrap;
`;
