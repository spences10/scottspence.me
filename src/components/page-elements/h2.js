import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
`;

const StyledText = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  text-align: center;
  margin-top: 30px;
  &:after {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.dark};
    height: 4px;
  }
`;

export const H2 = props => {
  return (
    <Wrapper {...props}>
      <StyledText>{props.children}</StyledText>
    </Wrapper>
  );
};
