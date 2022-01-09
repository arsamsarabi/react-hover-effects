import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'

export type IconFadeProps = HTMLAttributes<HTMLDivElement>

export const IconFade = styled.div<IconFadeProps>`
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  ${Icon} {
    transform: translateZ(0);
    transition-duration: 0.5s;
    transition-property: color;
  }

  &:hover,
  &:focus,
  &:active: {
    ${Icon} {
      color: #0f9e5e;
    }
  }
`
