import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type WobbleHorizontalProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  16.65% {
    transform: translateX(8px);
  }
  33.3% {
    transform: translateX(-6px);
  }
  49.95% {
    transform: translateX(4px);
  }
  66.6% {
    transform: translateX(-2px);
  }
  83.25% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
`

export const WobbleHorizontal = styled.div<WobbleHorizontalProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`
