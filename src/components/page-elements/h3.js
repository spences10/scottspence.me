import React from 'react';
import styled from 'styled-components';
import { H2 } from './h2';
import { AutoLink } from './linked-headers';

const StyledText = styled(H2)`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  text-align: left;
  ${() => AutoLink}
`;

export const H3 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
