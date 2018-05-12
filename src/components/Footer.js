import React from 'react'
import styled from 'styled-components'

import ThemeSelect from './ThemeSelect'
import { ThemeSelectContext } from './ThemeSelectContext'

import { PageWrapper as PW } from '../theme/globalStyle'

const ThemeSelectWrapper = PW.extend`
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-area: f;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . . . . . . . . . t';
`

const PlaceThemeSelect = styled.div`
  grid-area: t;
`

class Footer extends React.Component {
  render() {
    return (
      <ThemeSelectWrapper>
        <PlaceThemeSelect>
          <ThemeSelectContext.Consumer>
            {({ handleThemeChange }) => (
              <ThemeSelect handleThemeChange={handleThemeChange} />
            )}
          </ThemeSelectContext.Consumer>
        </PlaceThemeSelect>
      </ThemeSelectWrapper>
    )
  }
}

export default Footer
