import React from 'react'

export default (props) => (
  <div className='project'>
    {props.name}
    {props.desc}
    {props.github}
    {props.preview}
    {props.image}
  </div>
)
