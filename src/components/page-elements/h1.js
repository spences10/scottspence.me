import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  ${() => AutoLink}
`;

export const H1 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
