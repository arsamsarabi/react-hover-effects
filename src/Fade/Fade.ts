import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type FadeProps = HTMLAttributes<HTMLDivElement>

export const Fade = styled.div<FadeProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: color, background-color;

  &:hover,
  &:focus,
  &:active: {
    background-color: #2098d1;
    color: white;
  }
`
