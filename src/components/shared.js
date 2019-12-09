import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const ShinyButton = styled.button`
  margin: 0rem 0rem;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background: #fafafa;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  font-size: 1rem;
  display: inline-block;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:before {
    content: '';
    background-color: ${props => props.theme.primary};
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    /* background-color: #2194e0; */
    color: ${props => props.theme.primary};
    /* border-bottom: 4px solid #1977b5; */
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  &:hover&:before {
    transform: skewX(-45deg) translateX(13.5em);
    transition: all 0.5s ease-in-out;
  }
`;

export const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colours.dark[100]};
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
