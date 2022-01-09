import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  51%,
  100% {
    opacity: 1;
  }
`

export type IconDropProps = HTMLAttributes<HTMLDivElement>

export const IconDrop = styled.div<IconDropProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  ${Icon} {
    transform: translateZ(0);
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      animation-name: ${animation};
      opacity: 0;
      transition-duration: 0.3s;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
  }
`
