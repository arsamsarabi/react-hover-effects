import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type TrimProps = HTMLAttributes<HTMLDivElement>

export const Trim = styled.div<TrimProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border: white solid 4px;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: opacity;
  }

  &:hover,
  &:focus,
  &:active: {
    opacity: 1;
  }
`
