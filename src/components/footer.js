import React from 'react';
import styled from 'styled-components';
import graphCms from '../../static/graph-cms.svg';
import { PATTERNS } from '../theme/theme-constants';
import { Icons } from './social-icons';

const FooterStyles = styled.footer`
  position: relative;
  margin-top: 2rem;
  background: ${({ theme }) => theme.colours.primary[500]};
  color: ${({ theme }) => theme.fontDark};
  background-color: ${props => props.theme.primary};
  background-image: url("${PATTERNS.TOPOGRAPHY}");
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 5px 0px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  height: 6rem;
`;

const Img = styled.img.attrs({
  src: graphCms,
})`
  height: 50px;
`;

const IconsWrapper = styled.div`
  margin: 1.5rem;
`;

const ImgWrapper = styled.div`
  margin: 2rem;
`;

export const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <IconsWrapper>
          <Icons />
        </IconsWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
      </Container>
    </FooterStyles>
  );
};
