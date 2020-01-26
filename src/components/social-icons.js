import {
  faDev,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Container = styled.a`
  color: inherit;
  margin-right: 16px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover,
  &:active,
  &:focus {
    color: rgba(0, 0, 0, 1);
  }
`;

const Icon = ({ icon, url, alt }) => (
  <Container alt={alt} href={url} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </Container>
);

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
    <div className="App">
      <Icon
        icon={faTwitter}
        url={`${url.twitter}${twitter}`}
        alt="Link to Scott's twitter."
      />
      <Icon
        icon={faGithub}
        url={`${url.github}${github}`}
        alt="Link to Scott's github."
      />
      <Icon
        icon={faDev}
        url={`${url.devto}${devto}`}
        alt="Link to Scott's dev.to profile."
      />
      <Icon
        icon={faEnvelopeOpenText}
        url={`mailto:yo@scottspence.dev`}
        alt="Link to email Scott."
      />
      <Icon
        icon={faYoutube}
        url={`https://www.youtube.com/channel/UCnngLXpLSFsKkDhFoO9Ct3w?view_as=subscriber`}
        alt="Link to Scott's YouTube channel."
      />
      <Icon
        icon={faLinkedin}
        url={`${url.linkedin}${linkedin}`}
        alt="Link to Scott's linkedin."
      />
    </div>
  );
};
