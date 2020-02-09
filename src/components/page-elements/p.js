import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: ${({ theme }) => theme.spacing[5]};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;

export const P = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
