import React from 'react'
import styled from 'styled-components'
import graphCms from '../../static/graph-cms.svg'
import { Icons } from './social-icons'

const FooterStyles = styled.footer`
  position: relative;
  margin-top: 2rem;
  color: ${({ theme }) => theme.fontDark};
`

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  height: 6rem;
`

const Img = styled.img.attrs({
  src: graphCms,
})`
  height: 50px;
`

const IconsWrapper = styled.div`
  margin: 1.5rem;
`

const ImgWrapper = styled.div`
  margin: 2rem;
`

export const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <IconsWrapper>
          <Icons />
        </IconsWrapper>
        <ImgWrapper>
          <Img alt='graph cms logo' />
        </ImgWrapper>
      </Container>
    </FooterStyles>
  )
}
