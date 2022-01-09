import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type ShrinkProps = HTMLAttributes<HTMLDivElement>

export const Shrink = styled.div<ShrinkProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover,
  &:focus,
  &:active: {
    transform: scale(0.9);
  }
`
