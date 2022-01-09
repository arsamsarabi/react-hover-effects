import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  16.65% {
    transform: translateY(6px);
  }
  33.3% {
    transform: translateY(-5px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`

export type IconWobbleVerticalProps = HTMLAttributes<HTMLDivElement>

export const IconWobbleVertical = styled.div<IconWobbleVerticalProps>`
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
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
    }
  }
`
