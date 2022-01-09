import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type WobbleVerticalProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`

export const WobbleVertical = styled.div<WobbleVerticalProps>`
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
