import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  margin: 60px 0;
`;
export const Hr = props => {
  return <StyledHr {...props}>{props.children}</StyledHr>;
};
