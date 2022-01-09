import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type PulseGrowProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  to {
    transform: scale(1.1);
  }
`

export const PulseGrow = styled.div<PulseGrowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`
