import { Check } from 'phosphor-react'
import { ChecboxIndicator, CheckboxContainer } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <ChecboxIndicator asChild>
        <Check weight="bold" />
      </ChecboxIndicator>
    </CheckboxContainer>
  )
}
