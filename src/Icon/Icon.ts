import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type IconProps = HTMLAttributes<HTMLDivElement>

export const Icon = styled.div<IconProps>`
  transform: translateZ(0);
  transition-duration: 0.1s;
  transition-property: transform;
  transition-timing-function: ease-out;
`
