import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type BackPulseProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  50% {
    background-color: rgba(32, 152, 209, 0.75);
  }
`

export const BackPulse = styled.div<BackPulseProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  transition-duration: 0.5s;
  transition-property: color, background-color;

  &:hover,
  &:focus,
  &:active: {
    animation-name: ${animation};
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background-color: #2098d1;
    color: white;
  }
`
