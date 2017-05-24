import styled from 'styled-components';
import { Link } from "react-router"


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  flex: auto;
`;

export const Button = styled.button`
  width: 100%;
  height: 80px;
  color: red;
//   &:hover {
//     background-color: pink;
//   }
  &:active {
    background-color: yellow;
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

export const AnchorButton = styled(Link)`
width: 100%;
  height: 80px;
  color: red;
  &:hover {
    background-color: pink;
  }
  &:active {
    background-color: yellow;
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`