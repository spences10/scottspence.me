import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import bttImg from '../../static/back-to-top.svg';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { media } from '../theme/sizes';

const Wrapper = styled.a`
  display: none;
  pointer-events: none;
  margin: 10px 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  pointer-events: ${props => (props.visible ? 'all' : 'none')};
  transform: ${props =>
    props.visible
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(0, -150px, 0)'};
  transition: all 0.4s;
  ${media.desktop`
    display: block;
    z-index: 0;
  `};
  max-width: 50px;
`;

const bob = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -10px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const Image = styled.div`
  height: 40px;
  width: 100%;
  background-image: url(${bttImg});
  background-repeat: no-repeat;
  ${props =>
    props.visible &&
    css`
      animation: ${bob} 1.1s ease 3;
    `}
  margin:0;
  background-position: top center;
`;

const Text = styled.span`
  font-weight: 700;
  display: block;
  text-align: center;
  line-height: 22px;
`;

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const threshold = 0.1;
  const { scrollToTop } = useSmoothScroll();
  const showBackToTop = () =>
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype;

  const handleViewportChange = (entries, observer) => {
    const show = entries.every(e => e.intersectionRatio >= threshold);
    setVisible(show);
  };

  const observeViewport = () => {
    if (!showBackToTop()) return;

    const target = document.querySelector(
      '#back-to-top-intersection'
    );
    const observer = new IntersectionObserver(handleViewportChange, {
      threshold,
    });

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  };

  useEffect(observeViewport, []);

  return (
    <Wrapper
      role="link"
      aria-label="back to top navigation"
      onClick={scrollToTop}
      visible={visible}
    >
      <Image visible={visible} />
      <Text>Back to top</Text>
    </Wrapper>
  );
};
