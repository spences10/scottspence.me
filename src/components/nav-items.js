import React from 'react';
import styled from 'styled-components';
import { media } from '../theme/sizes';

export const NavWrapper = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: relative;
    right: 37%;
  `};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  gap: 30px;
  padding-bottom: 30px;
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colours.light[100]};
  background: linear-gradient(
    180turn,
    ${({ theme }) => theme.colours.primary[100]},
    ${({ theme }) => theme.colours.primary[600]}
  );
  height: 50px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NavItems = () => {
  return (
    <NavWrapper aria-label={`Site navigation`}>
      <NavLink href={`#about`}>About</NavLink>
      <NavLink href={`#portfolio`}>Portfolio</NavLink>
      <NavLink href={`#now`}>Now</NavLink>
      <NavLink href={`#uses`}>Uses</NavLink>
    </NavWrapper>
  );
};
