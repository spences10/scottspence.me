import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { ButtonSmall } from './Button'
import { HEROS } from '../theme/themeConstants'

const Name = styled.h3`
  margin: 0.5rem;
  padding: 0.5rem;
  /* font-weight: 900; */
  color: ${props => props.theme.white};
  font-family: Roboto black;
  text-align: center;
`

const Desc = styled.div`
  margin: 0rem;
  padding: 0.5rem;
  border-radius: 0px 0px 5px 5px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.white};
  text-align: center;
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

const Image = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.white};
  height: 150px;
  width: 150px;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  margin-left: auto;
  margin-right: auto;
  /* display: block; */
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
  console.log('=====props==========')
  console.log(props.imgData.node.childImageSharp.resolutions)
  console.log('====================')
  return (
    <CardWrapper key={props.id} id={props.id}>
      <Card id={props.id}>
        <Img
          key={props.id}
          alt={`${props.name} image`}
          resolutions={props.imgData.node.childImageSharp.resolutions}
        />
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
  image: PropTypes.string
}

export default Project
