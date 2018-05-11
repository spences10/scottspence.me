import { createContext } from 'react'
import { theme1 } from '../theme/globalStyle'

const ThemeChangeContext = createContext({
  theme: theme1
})

export const ThemeChangeProvider = ThemeChangeContext.Provider

export const ThemeChangeConsumer = ThemeChangeContext.Consumer
