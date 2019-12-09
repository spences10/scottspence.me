import React from 'react';
import styled from 'styled-components';

export const StyledA = styled.a`
  color: ${({ theme }) => theme.dark};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.dark};
  &:hover {
    opacity: 0.5;
  }
`;

export const A = props => {
  return <StyledA {...props}>{props.children}</StyledA>;
};
