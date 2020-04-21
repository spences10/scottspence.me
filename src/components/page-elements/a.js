import React, { useEffect, useState } from 'react'
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
  const containsGoalId = props.href.includes(`goalId`)
  const [goalId, setGoalId] = useState(``)
  const [newHref, setNewHref] = useState(``)

  useEffect(() => {
    if (containsGoalId) {
      const url = new URL(props.href)
      setGoalId(url.searchParams.get(`goalId`))
      url.searchParams.delete(`goalId`)
      setNewHref(url.href)
    }
  }, [containsGoalId, props.href])

  const onClick = () => {
    if (goalId) {
      fa.logLinkClick(goalId)
    }
  }

  return (
    <StyledA
      {...props}
      href={containsGoalId ? newHref : props.href}
      onClick={onClick}
    >
      {props.children}
    </StyledA>
  )
}
