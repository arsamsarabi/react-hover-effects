import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  50% {
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    transform: translateX(-3px) rotate(-2deg);
  }
`

export type IconBuzzProps = HTMLAttributes<HTMLDivElement>

export const IconBuzz = styled.div<IconBuzzProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;

  ${Icon} {
    transform: translateZ(0);
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      animation-name: ${animation};
      animation-duration: 0.15s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
`
