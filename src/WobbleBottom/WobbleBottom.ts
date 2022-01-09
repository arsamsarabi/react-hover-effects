import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type WobbleBottomProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  16.65% {
    transform: skew(-12deg);
  }
  33.3% {
    transform: skew(10deg);
  }
  49.95% {
    transform: skew(-6deg);
  }
  66.6% {
    transform: skew(4deg);
  }
  83.25% {
    transform: skew(-2deg);
  }
  100% {
    transform: skew(0);
  }
`

export const WobbleBottom = styled.div<WobbleBottomProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform-origin: 100% 0;

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`
