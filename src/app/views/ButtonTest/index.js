import React from 'react';

import {
  Button,
  ButtonContainer,
  ButtonWrapper,
} from './styles';

const ButtonTest = () => {
  return (
    <div>
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
      <div style={{
        height: 200,
        margin: '8em',
      }}>
        more content below...
      </div>
      <ButtonContainer>
        <ButtonWrapper>
          <Button>Test</Button>
        </ButtonWrapper>
      </ButtonContainer>
      <div style={{
        height: 200,
        margin: '8em',
      }}>
        more content below...
      </div>
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
    </div>
  )
};

export default ButtonTest;
