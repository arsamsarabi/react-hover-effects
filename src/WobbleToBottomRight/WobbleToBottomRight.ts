import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type WobbleToBottomRightProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  16.65% {
    transform: translate(8px, 8px);
  }
  33.3% {
    transform: translate(-6px, -6px);
  }
  49.95% {
    transform: translate(4px, 4px);
  }
  66.6% {
    transform: translate(-2px, -2px);
  }
  83.25% {
    transform: translate(1px, 1px);
  }
  100% {
    transform: translate(0, 0);
  }
`

export const WobbleToBottomRight = styled.div<WobbleToBottomRightProps>`
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
