import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

export type RippleOutProps = HTMLAttributes<HTMLDivElement>

const animation = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`

export const RippleOut = styled.div<RippleOutProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border: #e1e1e1 solid 6px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-duration: 1s;

    &:hover,
    &:focus,
    &:active: {
      animation-name: ${animation};
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
