import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BounceInProps = HTMLAttributes<HTMLDivElement>

export const BounceIn = styled.div<BounceInProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.5s;

  &:hover,
  &:focus,
  &:active: {
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
`
