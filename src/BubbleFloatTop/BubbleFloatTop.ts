import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BubbleFloatTopProps = HTMLAttributes<HTMLDivElement>

export const BubbleFloatTop = styled.div<BubbleFloatTopProps>`
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
    left: calc(50% - 10px);
    top: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #e1e1e1 transparent;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover,
    &:focus,
    &:active: {
      transform: translateY(-10px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
    transform: translateY(10px);
  }
`
