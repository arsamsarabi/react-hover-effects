import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BubbleRightProps = HTMLAttributes<HTMLDivElement>

export const BubbleRight = styled.div<BubbleRightProps>`
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
    top: calc(50% - 10px);
    right: 0;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #e1e1e1;

    &:hover,
    &:focus,
    &:active: {
      transform: translateX(10px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
