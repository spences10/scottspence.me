import React from 'react';
import styled from 'styled-components';

export const StyledSmall = styled.span`
  margin-top: ${({ theme }) => theme.spacing['0']};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colours.grey[700]};
`;

export const Small = props => {
  return <StyledSmall {...props}>{props.children}</StyledSmall>;
};
