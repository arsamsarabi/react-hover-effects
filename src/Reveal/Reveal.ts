import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type RevealProps = HTMLAttributes<HTMLDivElement>

export const Reveal = styled.div<RevealProps>`
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
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-color: #2098d1;
    border-style: solid;
    border-width: 0;
    transition-property: border-width;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      transform: translateY(0);
      border-width: 4px;
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
