import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type BuzzOutProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  10% {
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    transform: translateX(1px) rotate(0);
  }
  100% {
    transform: translateX(-1px) rotate(0);
  }
`

export const BuzzOut = styled.div<BuzzOutProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 0.75s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`
