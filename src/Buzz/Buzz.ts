import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type BuzzProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  50% {
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    transform: translateX(-3px) rotate(-2deg);
  }
`

export const Buzz = styled.div<BuzzProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 0.15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`
