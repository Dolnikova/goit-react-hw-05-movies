import styled from 'styled-components';
import { MainBgColor } from 'utilities/var';

// import { MdOutlineArrowBackIosNew } from 'react-icons/md';
export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  background-color: #585858;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    transform: scale(1.1);
  }
  :hover {
    opacity: 0.8;
  }
`;
// export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
//   margin-right: 5px;
// `;
export const BoxInfo = styled.div`
  display: flex;
`;
export const DeteilInfo = styled.div`
  margin-left: 50px;
`;
export const BoxMovie = styled.div`
  background-color: ${MainBgColor};
`;
