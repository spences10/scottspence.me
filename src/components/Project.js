import React from 'react'
import PropTypes from 'prop-types'

export const Project = (props) => {
  return (
    <div>
      {props.name}
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

