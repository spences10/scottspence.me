import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin-top: 30px;
  &:after {
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.dark};
    height: 4px;
  }
`;

export const H3 = props => {
  return <StyledText>{props.children}</StyledText>;
};
