import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type OutlineOutProps = HTMLAttributes<HTMLDivElement>

export const OutlineOut = styled.div<OutlineOutProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px #00000000;
  position: relative;

  &:hover,
  &:focus,
  &:active: {
  }

  &:before {
    content: '';
    position: absolute;
    border: #e1e1e1 solid 4px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition-duration: 0.3s;
    transition-property: top, right, bottom, left;

    &:hover,
    &:focus,
    &:active: {
      top: -8px;
      right: -8px;
      bottom: -8px;
      left: -8px;
    }
  }
`
