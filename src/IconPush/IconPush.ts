import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  50% {
    transform: scale(0.5);
  }
`

export type IconPushProps = HTMLAttributes<HTMLDivElement>

export const IconPush = styled.div<IconPushProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;

  ${Icon} {
    transform: translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      animation-name: ${animation};
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
    }
  }
`
