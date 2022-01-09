import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type PushProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`

export const Push = styled.div<PushProps>`
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
