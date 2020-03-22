// import Dump from '@wesbos/dump';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: solid 1px ${({ theme }) => theme.colours.grey[300]};
  img {
    height: ${({ theme }) => theme.spacing[64]};
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  h4 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
  a {
    font-weight: 700;
    font-size: 0.65rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colours.grey[400]};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    padding-right: ${({ theme }) => theme.spacing[2]};
  }
  p {
    color: ${({ theme }) => theme.colours.grey[700]};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const ProjectCard = ({
  id,
  image,
  name,
  demo,
  github,
  desc,
}) => {
  return (
    <CardWrapper>
      <img src={image} alt={name} />
      <Card>
        <a href={github}>GitHub</a>
        <a href={demo}>Demo</a>
        <h4>{name}</h4>
        <p>{desc}</p>
      </Card>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.string,
  image: PropTypes.string,
  imgData: PropTypes.object,
};
