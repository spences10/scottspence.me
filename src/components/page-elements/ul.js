import React from 'react';
import styled from 'styled-components';

export const StyledUl = styled.ul`
  margin: 0 17px;
`;

export const Ul = props => {
  return <StyledUl {...props}>{props.children}</StyledUl>;
};
