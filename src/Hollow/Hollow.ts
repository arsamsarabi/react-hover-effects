import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type HollowProps = HTMLAttributes<HTMLDivElement>

export const Hollow = styled.div<HollowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: background;
  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);

  &:hover,
  &:focus,
  &:active: {
    background: none;
  }
`
