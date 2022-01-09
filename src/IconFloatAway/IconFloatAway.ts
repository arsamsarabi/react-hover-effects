import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-1em);
  }
`

export type IconFloatAwayProps = HTMLAttributes<HTMLDivElement>

export const IconFloatAway = styled.div<IconFloatAwayProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  ${Icon} {
    transform: translateZ(0);
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      animation-name: ${animation};
      animation-timing-function: ease-out;
    }
  }
`
