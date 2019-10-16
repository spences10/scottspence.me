import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import {
  ThemeSelectContext,
  ThemeSelectProvider
} from "../contexts/ThemeSelectContext";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
// import { Dump } from '../util/helpers'
import { GlobalStyle } from "../theme/globalStyle";
import Footer from "./footer";
import Header from "./header";

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  font-family: ${({ theme }) => theme.fontBody};
  height: 100%;
  margin: 0 auto;
  display: block;
    max-width: 540px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  grid-area: m;
`;

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <ThemeSelectProvider>
      <ThemeSelectContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <AppStyles>
              <GlobalStyle />
              <Helmet>
                <html lang="en-GB" />
              </Helmet>
              <Header siteTitle={title} />
              <Wrapper>{children}</Wrapper>
              <Footer />
            </AppStyles>
          </ThemeProvider>
        )}
      </ThemeSelectContext.Consumer>
    </ThemeSelectProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
