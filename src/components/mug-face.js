import React from 'react';
import styled from 'styled-components';
import mugFace from '../../static/favicon.png';

const ImageDiv = styled.div`
  margin: 0 auto;
  position: relative;
  height: 200px;
  width: 200px;
  background-image: url(${mugFace});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MugFace = () => {
  return (
    <Wrapper>
      <ImageDiv />
    </Wrapper>
  );
};
