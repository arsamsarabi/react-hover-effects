import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type OutlineInProps = HTMLAttributes<HTMLDivElement>

export const OutlineIn = styled.div<OutlineInProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:hover,
  &:focus,
  &:active: {
  }

  &:before {
    pointer-events: none;
    content: '';
    position: absolute;
    border: #e1e1e1 solid 4px;
    top: -16px;
    right: -16px;
    bottom: -16px;
    left: -16px;
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: top, right, bottom, left;

    &:hover,
    &:focus,
    &:active: {
      top: -8px;
      right: -8px;
      bottom: -8px;
      left: -8px;
      opacity: 1;
    }
  }
`
