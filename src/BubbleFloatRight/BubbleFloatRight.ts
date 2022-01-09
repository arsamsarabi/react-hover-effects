import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BubbleFloatRightProps = HTMLAttributes<HTMLDivElement>

export const BubbleFloatRight = styled.div<BubbleFloatRightProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;

  &:before {
    position: absolute;
    z-index: -1;
    top: calc(50% - 10px);
    right: 0;
    content: '';
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #e1e1e1;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover,
    &:focus,
    &:active: {
      transform: translateX(10px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
    transform: translateX(-10px);
  }
`
