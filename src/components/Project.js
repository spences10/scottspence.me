import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Name = styled.h2`
  margin-top: 0;
  font-weight: 900;
  margin-bottom: 0.75rem;
`

export const Project = props => {
  return (
    <div className="project">
      <Name> {props.name}</Name>
      {props.desc}
      {props.github}
      {props.preview}
      {props.image}
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  preview: PropTypes.string,
  image: PropTypes.string
}

export default Project
