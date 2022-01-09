import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type HangProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  0% {
    transform: translateY(8px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(8px);
  }
`

const animationTwo = keyframes`
  100% {
    transform: translateY(8px);
  }
`

export const Hang = styled.div<HangProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation}, ${animationTwo};
    animation-duration: 0.3s, 1.5s;
    animation-delay: 0s, 0.3s;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
  }
`
