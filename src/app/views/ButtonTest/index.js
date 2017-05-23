import React from 'react';

import {
  Button,
  ButtonContainer,
  ButtonWrapper,
} from './styles';

const ButtonTest = () => {
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Button>Test</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>Hello</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>World</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>Test</Button>
      </ButtonWrapper>
    </ButtonContainer>
  )
};

export default ButtonTest;
