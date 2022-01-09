import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type ShadowRadialProps = HTMLAttributes<HTMLDivElement>

export const ShadowRadial = styled.div<ShadowRadialProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before,
  &:after {
    pointer-events: none;
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    height: 5px;
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: opacity;

    &:hover,
    &:focus,
    &:active: {
      opacity: 1;
    }
  }

  &:before {
    bottom: 100%;
    background: -webkit-radial-gradient(
      50% 150%,
      ellipse,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    background: radial-gradient(
      ellipse at 50% 150%,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 80%
    );
  }

  &:after {
    top: 100%;
    background: -webkit-radial-gradient(
      50% -50%,
      ellipse,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    background: radial-gradient(
      ellipse at 50% -50%,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 80%
    );
  }

  &:hover,
  &:focus,
  &:active: {
  }
`
