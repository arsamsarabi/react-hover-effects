import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type GrowProps = HTMLAttributes<HTMLDivElement>

export const Grow = styled.div<GrowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover,
  &:focus,
  &:active: {
    transform: scale(1.1);
  }
`
