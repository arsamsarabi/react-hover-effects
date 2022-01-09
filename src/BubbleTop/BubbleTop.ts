import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BubbleTopProps = HTMLAttributes<HTMLDivElement>

export const BubbleTop = styled.div<BubbleTopProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    transition-duration: 0.3s;
    transition-property: transform;
    left: calc(50% - 10px);
    top: 0;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e1e1e1 transparent;

    &:hover,
    &:focus,
    &:active: {
      transform: translateY(-10px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
