import styled from 'styled-components';
import { TextColor } from 'utilities/var';

export const InputForm = styled.form`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Poster = styled.img`
  width: 450px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: 350px;
  }
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
export const Box = styled.ul`
  color: ${TextColor};
  display: flex;
  flex-wrap: wrap;
`;
