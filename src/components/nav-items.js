import React from 'react';
import styled from 'styled-components';
import { useAnalytics } from '../contexts/fathom-event-tracking';
import { media } from '../theme/sizes';

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  padding-bottom: 50px;
  width: 100%;
  max-width: 1000px;
  ${media.desktop`
    display: flex;
    justify-content: center;
    width: 100vw;
    position: relative;
    right: 27%;
    gap: 10px;
    margin: 0 -50px;
  `};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colours.grey[100]};
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
  outline: none;
  ${media.desktop`
    margin: 0 10px;
  `};
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.outline};
  }
`;

export const NavItems = () => {
  const analytics = useAnalytics();
  return (
    <NavWrapper aria-label={`Site navigation`}>
      <NavLink
        href={`#hi-im-scott`}
        onClick={() => analytics.logNavigation('RC4QULF8')}
      >
        About
      </NavLink>
      <NavLink
        href={`#portfolio`}
        onClick={() => analytics.logNavigation('H9UEFCBF')}
      >
        Portfolio
      </NavLink>
      <NavLink
        href={`#what-im-doing-now`}
        onClick={() => analytics.logNavigation('WSZZMPAQ')}
      >
        Now
      </NavLink>
      <NavLink
        href={`#uses`}
        onClick={() => analytics.logNavigation('QSWHMGAE')}
      >
        Uses
      </NavLink>
    </NavWrapper>
  );
};
