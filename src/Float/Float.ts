import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type FloatProps = HTMLAttributes<HTMLDivElement>

export const Float = styled.div<FloatProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease-out;

  &:hover,
  &:focus,
  &:active: {
    transform: translateY(-8px);
  }
`
