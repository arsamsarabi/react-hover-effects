import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type ShadowProps = HTMLAttributes<HTMLDivElement>

export const Shadow = styled.div<ShadowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow;

  &:hover,
  &:focus,
  &:active: {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  }
`
