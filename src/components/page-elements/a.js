import React from 'react'
import styled from 'styled-components'
import { useAnalytics } from '../../contexts/fathom-event-tracking'

export const StyledA = styled.a`
  color: ${({ theme }) => theme.colours.grey[900]};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colours.grey[900]};
  &:hover {
    opacity: 0.5;
  }
`

export const A = props => {
  const fa = useAnalytics()
  const onClick = () => {
    if (props.href.includes(`goalId`)) {
      const params = new URL(props.href).searchParams
      fa.logLinkClick(params.get(`goalId`))
    }
  }

  return (
    <StyledA {...props} href={props.href} onClick={onClick}>
      {props.children}
    </StyledA>
  )
}
