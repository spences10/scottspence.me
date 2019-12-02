import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-top: 30px;
  ${() => AutoLink}
`;

export const H2 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
