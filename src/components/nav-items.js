import React from 'react';
import styled from 'styled-components';
import { useAnalytics } from '../contexts/fathom-event-tracking';
import { media } from '../theme/sizes';

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  gap: 30px;
  padding-bottom: 30px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  ${media.desktop`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: relative;
    right: 36%;
    gap: 50px;
  `};
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
  text-decoration: none;
`;

export const NavItems = () => {
  const analytics = useAnalytics();
  return (
    <NavWrapper aria-label={`Site navigation`}>
      <NavLink
        href={`#about`}
        onClick={() => analytics.logButtonPress()}
      >
        About
      </NavLink>
      <NavLink href={`#portfolio`}>Portfolio</NavLink>
      <NavLink href={`#now`}>Now</NavLink>
      <NavLink href={`#uses`}>Uses</NavLink>
    </NavWrapper>
  );
};
