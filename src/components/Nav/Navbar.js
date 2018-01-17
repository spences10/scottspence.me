import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import NavLinks from './NavLinks'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  /* z-index: 3; */

  width: 100%;
  height: 18px;
`

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #000;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #000;
`

class Navbar extends PureComponent {
  render() {
    return (
      <Wrapper>
        <NormalNavbar>
          <StartWrapper>
            <NavLinks />
          </StartWrapper>
          <EndWrapper>EndWrapper</EndWrapper>
        </NormalNavbar>
      </Wrapper>
    )
  }
}

export default Navbar
