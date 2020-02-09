import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.header};
  ${AutoLink}
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

export const H3 = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
