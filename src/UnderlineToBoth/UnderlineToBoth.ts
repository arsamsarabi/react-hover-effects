import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type UnderlineToBothProps = HTMLAttributes<HTMLDivElement>

export const UnderlineToBoth = styled.div<UnderlineToBothProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #2098d1;
    height: 4px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      left: 0;
      right: 0;
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
