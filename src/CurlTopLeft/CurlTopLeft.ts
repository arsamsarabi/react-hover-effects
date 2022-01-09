import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type CurlTopLeftProps = HTMLAttributes<HTMLDivElement>

export const CurlTopLeft = styled.div<CurlTopLeftProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: white;

    &:hover,
    &:focus,
    &:active: {
      width: 25px;
      height: 25px;
    }
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
