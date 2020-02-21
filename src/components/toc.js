import React from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { A } from '../components/page-elements';

const StyledToc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  ${down('sm')} {
    display: none;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.font.serif};
    margin-top: ${({ theme }) => theme.spacing[2]};
  }
  li {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-top: ${({ theme }) => theme.spacing[3]};
  }
`;

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  margin: ${({ theme }) => theme.spacing[3]};
`;

export const Toc = ({ items }) => {
  return (
    <>
      {typeof items === 'undefined' ? null : (
        <StyledToc>
          <InnerScroll>
            <h3>Table of contents</h3>
            {items[0].items.map(i => {
              return (
                <li key={i.url}>
                  <A href={i.url}>{i.title}</A>
                </li>
              );
            })}
          </InnerScroll>
        </StyledToc>
      )}
    </>
  );
};
