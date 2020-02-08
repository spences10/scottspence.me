import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-family: ${({ theme }) => theme.fonts.header};
  ${() => AutoLink}
  margin-top: 50px;
`;

export const H1 = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
