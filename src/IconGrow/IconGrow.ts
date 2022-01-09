import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'

export type IconGrowProps = HTMLAttributes<HTMLDivElement>

export const IconGrow = styled.div<IconGrowProps>`
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
      transform: scale(1.3) translateZ(0);
    }
  }
`
