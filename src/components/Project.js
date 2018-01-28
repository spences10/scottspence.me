import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

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
  /* padding: 1.75rem; */
  /* margin: 0.5rem; */
  border-radius: 15px;
  color: ${props => props.theme.white};
  background: ${props =>
    props.id % 2 === 0
      ? `${props.theme.secondary.pink}`
      : `${props.theme.secondary.blue}`};
`

const Image = styled.img`
  border-radius: 15px 15px 0px 0px;
  max-width: 100%;
  max-height: 100%;
`

export const Project = props => {
  return (
    <Card key={props.id} id={props.id}>
      <Image src={props.image} alt={props.name} />
      <Name>{props.name}</Name>
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
