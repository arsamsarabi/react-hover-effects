import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BoxShadowOutsetProps = HTMLAttributes<HTMLDivElement>

export const BoxShadowOutset = styled.div<BoxShadowOutsetProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow;

  &:hover,
  &:focus,
  &:active: {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  }
`
