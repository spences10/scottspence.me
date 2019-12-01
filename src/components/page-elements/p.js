import React from 'react';
import styled from 'styled-components';
import { media } from '../../theme/sizes';

const StyledText = styled.p`
  font-size: 16px;
  /* max-width: ${({ theme }) => theme.maxWidth}; */
  margin: 0 auto;
  margin-top: 30px;
  ${media.desktop`
    font-size: 18px;
    margin-top: 40px;
  `}
`;

export const P = props => {
  const { children, ...rest } = props;
  return <StyledText {...rest}>{children}</StyledText>;
};
