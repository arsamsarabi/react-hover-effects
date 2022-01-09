import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type GrowShadowProps = HTMLAttributes<HTMLDivElement>

export const GrowShadow = styled.div<GrowShadowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;

  &:hover,
  &:focus,
  &:active: {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`
