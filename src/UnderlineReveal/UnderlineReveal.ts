import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type UnderlineRevealProps = HTMLAttributes<HTMLDivElement>

export const UnderlineReveal = styled.div<UnderlineRevealProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    height: 4px;
    transform: translateY(4px);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      transform: translateY(0);
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
