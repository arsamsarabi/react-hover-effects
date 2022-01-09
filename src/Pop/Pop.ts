import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type PopProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  50% {
    transform: scale(1.2);
  }
`

export const Pop = styled.div<PopProps>`
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
    animation-iteration-count: 1;
  }
`
