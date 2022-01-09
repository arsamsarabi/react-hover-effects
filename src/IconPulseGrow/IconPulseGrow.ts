import { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

import { Icon } from '../Icon'

const animation = keyframes`
  to {
    transform: scale(1.3);
  }
`

export type IconPulseGrowProps = HTMLAttributes<HTMLDivElement>

export const IconPulseGrow = styled.div<IconPulseGrowProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  ${Icon} {
    transform: translateZ(0);
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      animation-name: ${animation};
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
`
