import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Name = styled.h2`
  margin-top: 0;
  font-weight: 900;
  margin-bottom: 0.75rem;
`

const Desc = styled.p`
  margin-top: 0;
  line-height: 1.5;
`

const Card = styled.div`
  padding: 1.75rem;
  margin: 0.5rem;
  border-radius: 4px;
  color: white;
  background: ${props => (props.id % 2 === 0 ? '#44bccc' : '#f973bc')};
`

const Link = styled.a`
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
      <Link>{props.github} </Link>
      <Image src={props.image} alt={props.name} />
    </Card>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string
}

export default Project
