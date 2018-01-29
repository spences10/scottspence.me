import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { ButtonSmall } from './Button'
import { HEROS } from '../theme/themeConstants'

const Name = styled.h3`
  margin-top: 0;
  /* font-weight: 900; */
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0.5rem;
`

const Desc = styled.p`
  color: ${props => props.theme.white};
  margin: 0.5rem;
  padding: 0.5rem;
`

const StyledLink = styled.a`
  margin: 0.5rem;
  padding: 0.5rem;
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

const Card = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;

  border-radius: 5px;
  color: ${props => props.theme.white};
  background-color: ${props =>
    props.id % 2 === 0
      ? `${props.theme.secondary.pink}`
      : `${props.theme.secondary.blue}`};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
  }
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
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 50px;
`

export const Project = props => {
  return (
    <Card key={props.id} id={props.id}>
      <Image background={props.image} title={`${props.name} image`} />
      <Name>{props.name}</Name>
      <CardButton>Demo</CardButton>
      <CardButton>GitHub</CardButton>
      <Desc>{props.desc}</Desc>
      <StyledLink target="_blank" rel="noopener" href={props.github}>
        {props.github}
      </StyledLink>
    </Card>
  )
}

Project.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string
}

export default Project
