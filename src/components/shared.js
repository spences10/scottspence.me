import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colours.grey[100]};
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.colours.primary[100]};
  }
  padding: 3px;
  &:hover {
    color: ${({ theme }) => theme.colours.primary[100]};
  }
  &:active {
    color: ${({ theme }) => theme.colours.primary[100]};
  }
`;

export const Button = styled.button`
  color: ${props => props.color};
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid ${props => props.border};
  background-color: Transparent;
  border-radius: 4px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

export const ButtonSmall = styled(Button)`
  padding: 0.1rem 2rem;
  margin: 0.2rem;
`;

export const ButtonBig = styled(Button)`
  padding: 0.75rem 2rem;
  margin: 0.5rem;
`;
