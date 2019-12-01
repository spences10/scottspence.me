import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
`;

const StyledText = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  text-align: center;
  &:after {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.dark};
    height: 4px;
  }
`;

export const H3 = props => {
  return (
    <Wrapper {...props}>
      <StyledText>{props.children}</StyledText>
    </Wrapper>
  );
};
