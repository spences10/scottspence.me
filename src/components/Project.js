import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { ButtonSmall } from './Button'
import { HEROS } from '../theme/themeConstants'

const Name = styled.h3`
  margin: 0.5rem;
  padding: 0.5rem;
  color: ${props => props.theme.white};
  font-family: Roboto;
  font-weight: 900;
  text-align: center;
`

const Desc = styled.div`
  margin: 0rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 0px 0px 5px 5px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.white};
  text-align: center;
  font-family: 'Titillium Web';
  font-weight: 700;
  line-height: 150%;
`

const StyledLink = styled.a``

const CardWrapper = styled.div`
  margin: 0rem;
  padding: 0rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  }
  background-color: ${props => props.theme.white};
`

const Card = styled.div`
  padding: 1.75rem;
  margin: 0rem;

  border-radius: 5px 5px 0px 0px;
  color: ${props => props.theme.white};
  background-color: ${props =>
    props.id % 2 === 0
      ? `${props.theme.secondary.pink}`
      : `${props.theme.secondary.blue}`};
  background-image: url("${HEROS.WIGGLE}");
`

const ImageWrapper = styled.div`
  display: grid;
  justify-items: center;
`

const CardButton = ButtonSmall.extend`
  text-transform: none;
  border: 2px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  font-family: Roboto medium;
  margin: 0.5rem 0.6rem 0.5rem 0.6rem;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  border-radius: 50px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Project = props => {
  // childImageSharp.resolutions as cis
  const { resolutions: cis } = props.imgData.node.childImageSharp
  // console.log('=====props==========')
  // console.log(props.imgData.node.childImageSharp.resolutions)
  // console.log(cis)
  // console.log('====================')
  return (
    <CardWrapper key={props.id} id={props.id}>
      <Card id={props.id}>
        <ImageWrapper>
          <Img
            style={{
              borderRadius: '100%',
              border: '2px solid white'
            }}
            key={props.id}
            alt={`${props.name} image`}
            resolutions={cis}
          />
        </ImageWrapper>
        <Name>{props.name}</Name>
        <ButtonsWrapper>
          <StyledLink
            target="_blank"
            rel="noopener"
            href={props.demo}>
            <CardButton>Demo</CardButton>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener"
            href={props.github}>
            <CardButton>GitHub</CardButton>
          </StyledLink>
        </ButtonsWrapper>
      </Card>
      <Desc>{props.desc}</Desc>
    </CardWrapper>
  )
}

Project.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
  image: PropTypes.string,
  imgData: PropTypes.object
}

export default Project
