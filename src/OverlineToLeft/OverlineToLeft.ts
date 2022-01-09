import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type OverlineToLeftProps = HTMLAttributes<HTMLDivElement>

export const OverlineToLeft = styled.div<OverlineToLeftProps>`
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
    left: 100%;
    right: 0;
    top: 0;
    background: #2098d1;
    height: 4px;
    transition-property: left;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      left: 0;
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
