import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4vh 0px;
`;

export const LandingPage = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
