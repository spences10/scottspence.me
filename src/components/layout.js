import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
// import { Dump } from '../util/helpers'
import { GlobalStyle, theme } from '../theme/globalStyle';
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
  const { title } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <GlobalStyle />
        <Helmet>
          <html lang="en-GB" />
        </Helmet>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </AppStyles>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
