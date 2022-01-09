import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BubbleFloatLeftProps = HTMLAttributes<HTMLDivElement>

export const BubbleFloatLeft = styled.div<BubbleFloatLeftProps>`
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
    content: '';
    top: calc(50% - 10px);
    left: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #e1e1e1 transparent transparent;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover,
    &:focus,
    &:active: {
      transform: translateX(-10px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
    transform: translateX(10px);
  }
`
