import React from 'react';
import styled from 'styled-components';
import mugFace from '../../static/favicon.png';

const ImageDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  height: 200px;
  width: 200px;
  background-image: url(${mugFace});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export const MugFace = () => {
  return (
    <>
      <ImageDiv />
    </>
  );
};
