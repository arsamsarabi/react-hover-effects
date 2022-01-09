import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type FloatShadowProps = HTMLAttributes<HTMLDivElement>

export const FloatShadow = styled.div<FloatShadowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;

  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(
      center,
      ellipse,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;

    &:hover,
    &:focus,
    &:active: {
      opacity: 1;
      transform: translateY(5px);
    }
  }

  &:hover,
  &:focus,
  &:active: {
    transform: translateY(-5px);
  }
`
