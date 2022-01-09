import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BounceToBottomProps = HTMLAttributes<HTMLDivElement>

export const BounceToBottom = styled.div<BounceToBottomProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.5s;

  &:hover,
  &:focus,
  &:active: {
    color: white;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    transform: scaleY(0);
    transform-origin: 50% 0;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      transform: scaleY(1);
      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
  }
`
