import React from 'react'
import styled from 'styled-components'

import ThemeSelect from './ThemeSelect'
import { ThemeSelectContext } from './ThemeSelectContext'

import { PageWrapper } from '../theme/globalStyle'

const ThemeSelectWrapper = styled.div`
  grid-area: f;
`

class Footer extends React.Component {
  render() {
    return (
      <PageWrapper>
        <ThemeSelectWrapper>
          <ThemeSelectContext.Consumer>
            {({ handleThemeChange }) => (
              <ThemeSelect handleThemeChange={handleThemeChange} />
            )}
          </ThemeSelectContext.Consumer>
        </ThemeSelectWrapper>
      </PageWrapper>
    )
  }
}

export default Footer
