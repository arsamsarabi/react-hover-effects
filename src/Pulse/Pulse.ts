import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type PulseProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  25% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
`

export const Pulse = styled.div<PulseProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`
