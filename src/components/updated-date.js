import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledDate = styled.span`
  ${({ small, theme }) =>
    small && `font-size: ${theme.fontSizes.small}`}
`;

export const UpdatedDate = ({ date, small }) => {
  const { lastBuildDate } = useSiteMetadata();
  const buildDate = date ? date : lastBuildDate;
  return <StyledDate small={small}>{buildDate}</StyledDate>;
};
