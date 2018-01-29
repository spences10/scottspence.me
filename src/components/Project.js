import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Name = styled.h3`
  margin-top: 0;
  /* font-weight: 900; */
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const Desc = styled.p`
  color: ${props => props.theme.white};
  margin: 0.05rem;
  padding: 0rem;
`

const Card = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 4px;
  color: white;
  background: ${props =>
    props.id % 2 === 0 ? '#44bccc' : '#f973bc'};
`

const StyledLink = styled(Link)`
  color: blue;
`

const Image = styled.img`
  border-radius: 8px;
  border: 1px solid #000;
  max-width: 100%;
  max-height: 100%;
`

export const Project = props => {
  return (
    <Card key={props.id} id={props.id}>
      <Name>{props.name}</Name>
      <Desc>{props.desc}</Desc>
      <StyledLink>
        <Link to={props.github}>{props.github}</Link>
      </StyledLink>
      <Image src={props.image} alt={props.name} />
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
