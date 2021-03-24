import React from 'react'
import pt from 'prop-types'

import Select from '@/components/controls/Select'
import { languages } from '@/internalization'

interface IProps {
  active: string,
  onSetLocale: (value: string) => void,
  props?: any
}

const SetLocale: React.FC<IProps> = ({ active, onSetLocale }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSetLocale(event.target.value)
  }

  return (
    <Select onChange={onChange} value={active}>
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>
  )
}

SetLocale.propTypes = {
  active: pt.string.isRequired,
  onSetLocale: pt.func.isRequired,
}

export default SetLocale