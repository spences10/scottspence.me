import React from 'react';
import styled from 'styled-components';
import { H1 } from './page-elements';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4vh 0px;
`;

export const LandingPage = ({ children }) => {
  return (
    <Wrapper>
      <header id="top" style={{ textAlign: 'center' }}>
        <H1>
          Hello World!
          <span role="img" aria-label="waving hand emoji">
            👋
          </span>
        </H1>
      </header>
      {children}
    </Wrapper>
  );
};
