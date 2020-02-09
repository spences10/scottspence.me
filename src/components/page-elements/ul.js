import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[5]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

export const StyledUl = styled.ul`
  margin: 0 17px;
`;

export const Ul = props => {
  return (
    <Wrapper>
      <StyledUl {...props}>{props.children}</StyledUl>
    </Wrapper>
  );
};
