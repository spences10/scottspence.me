import React from 'react';
import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style-type: circle;
`;

export const Ul = props => {
  return <StyledUl {...props}>{props.children}</StyledUl>;
};
