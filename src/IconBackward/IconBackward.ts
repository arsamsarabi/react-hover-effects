import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'

export type IconBackwardProps = HTMLAttributes<HTMLDivElement>

export const IconBackward = styled.div<IconBackwardProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.1s;

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      transform: translateX(-4px);
    }
  }
`
