import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'

export type IconSpinProps = HTMLAttributes<HTMLDivElement>

export const IconSpin = styled.div<IconSpinProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  ${Icon} {
    transition-duration: 1s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      transform: rotate(360deg);
    }
  }
`
