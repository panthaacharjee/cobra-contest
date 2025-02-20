import React from 'react'
import Select from 'react-select'


const CountrySelect = ({options, value, changeHandler}) => {
  return (
    <Select options={options} value={value} onChange={changeHandler} />
  )
}

export default CountrySelect