import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  margin-top: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[24]};
  opacity: 0.5;
  color: ${({ theme }) => theme.colours.grey[300]};
`;

export const Hr = props => {
  return <StyledHr {...props}>{props.children}</StyledHr>;
};
