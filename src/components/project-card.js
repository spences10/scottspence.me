// import Dump from '@wesbos/dump';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 83.333333%;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    filter: brightness(80%) saturate(60%);
    &:hover {
      filter: brightness(100%) saturate(100%);
    }
  }
`;

const Card = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-top: -${({ theme }) => theme.spacing[16]};
  div {
    background-color: ${({ theme }) => theme.colours.white};
    padding: ${({ theme }) => theme.spacing[6]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
    h4 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.lg};
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }
    a {
      font-weight: 700;
      font-size: 0.65rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colours.grey[500]};
      letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
      padding-right: ${({ theme }) => theme.spacing[2]};
      text-decoration: none;
    }
    p {
      color: ${({ theme }) => theme.colours.grey[700]};
      line-height: ${({ theme }) => theme.lineHeight.snug};
      font-size: ${({ theme }) => theme.fontSize.sm};
      max-height: ${({ theme }) => theme.spacing[16]};
    }
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
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <Card>
        <div>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : null}
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <h4>{name}</h4>
          <p>
            {desc.length > 65 ? `${desc.substring(0, 65)}...` : desc}
          </p>
        </div>
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
