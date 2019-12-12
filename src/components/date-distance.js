import { formatDistance } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.span``;

export const DateDistance = ({ date }) => {
  const distance = formatDistance(
    new Date(Date.now()),
    new Date(date)
  );
  return <StyledDate>{distance}</StyledDate>;
};
