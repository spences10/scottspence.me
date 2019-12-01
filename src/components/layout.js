import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
// import Dump from '@wesbos/dump'
import { GlobalStyle } from '../theme/global-style';
import { Footer } from './footer';

const AppStyles = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.p};
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <AppStyles>
      <GlobalStyle />
      <Helmet>
        <html lang="en-GB" />
      </Helmet>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </AppStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
