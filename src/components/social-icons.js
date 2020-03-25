// import {
//   faDev,
//   faGithub,
//   faLinkedin,
//   faTwitter,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import {
  FaDev,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Container = styled.div`
  a {
    color: inherit;
    margin-right: 16px;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &:hover,
    &:active,
    &:focus {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export const Icons = () => {
  const {
    socialUserNames: { twitter, github, devto, linkedin },
  } = useSiteMetadata();

  const url = {
    github: `https://github.com/`,
    devto: `https://dev.to/`,
    twitter: `https://twitter.com/`,
    linkedin: `https://www.linkedin.com/in/`,
  };
  return (
    <Container>
      <a
        href={`${url.twitter}${twitter}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href={`${url.github}${github}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href={`${url.devto}${devto}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaDev />
      </a>
      <a
        href={`mailto:yo@scottspence.dev`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaEnvelopeOpenText />
      </a>
      <a
        href={`https://www.youtube.com/channel/UCnngLXpLSFsKkDhFoO9Ct3w`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaYoutube />
      </a>
      <a
        href={`${url.linkedin}${linkedin}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </Container>
  );
};
