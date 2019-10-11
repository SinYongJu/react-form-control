import React from 'react'
import propsTypes from 'prop-types'
import './Form.scss'
import Select from './Select'
import InputTxt from './InputTxt'

const Form = ({ title }) => {
  const [selectValues, setSelectValues] = React.useState({
    nameValue: '',
    selectedValue: 'a',
  })
  const onChangeNameValue = e => {
    const value = e.target.value
    const name = e.target.name
    setSelectValues(c => {
      return {
        ...c,
        [name]: value,
      }
    })
  }

  const onChangeSelect = e => {
    const value = e.target.value
    const name = e.target.name
    setSelectValues(c => {
      console.log(c, name)
      return {
        ...c,
        [name]: value,
      }
    })
  }
  const selectrContents = {
    title: 'select value',
    name: 'selectedValue',
    optArr: ['a', 'b', 'c', 'd'],
    value: selectValues.selectedValue,
    id: 'select01',
    onChange: onChangeSelect,
  }

  const inputNameContents = {
    title: 'input nameValue',
    name: 'nameValue',
    value: selectValues.nameValue,
    id: 'inputNameValue01',
    onChange: onChangeNameValue,
  }

  return (
    <form>
      <legend>{title}</legend>
      <Select contents={selectrContents} />
      <InputTxt contents={inputNameContents} />
    </form>
  )
}

export default Form

Form.defaultProps = {
  title: 'Input form controller',
}

Form.propsTypes = {
  title: propsTypes.string,
}
