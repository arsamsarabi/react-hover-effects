import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type SweepToLeftProps = HTMLAttributes<HTMLDivElement>

export const SweepToLeft = styled.div<SweepToLeftProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  &:hover,
  &:focus,
  &:active: {
    color: white;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus,
    &:active: {
      transform: scaleX(1);
    }
  }
`
