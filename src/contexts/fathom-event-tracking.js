import React, { createContext, useContext, useEffect } from 'react'

const AnalyticsContext = createContext({})

export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window.fathom === 'undefined') {
      window.fathom = (x, y, z) => {
        console.log(`I'm a fake Fathom`, x, y, z)
      }
    }
  }, [])

  const events = {
    logNavigation: goalId => {
      window.fathom('trackGoal', goalId, 0)
    },
    logLinkClick: goalId => {
      window.fathom('trackGoal', goalId, 0)
    },
  }
  return (
    <AnalyticsContext.Provider value={events}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  return useContext(AnalyticsContext)
}
