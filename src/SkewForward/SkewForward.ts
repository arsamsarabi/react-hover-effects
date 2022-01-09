import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type SkewForwardProps = HTMLAttributes<HTMLDivElement>

export const SkewForward = styled.div<SkewForwardProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  transform-origin: 0 100%;

  &:hover,
  &:focus,
  &:active: {
    transform: skew(-10deg);
  }
`
