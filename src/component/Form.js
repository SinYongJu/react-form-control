import React from 'react'
import propsTypes from 'prop-types'
import Select from './Select'
const Form = () => {
  const [selectValues, setSelectValues] = React.useState({
    nameValue: '',
    selectedValue: 'a',
  })
  const onChangeNameValue = e => {
    const [value, name] = e.target
    setSelectValues(c => {
      return {
        ...c,
        [name]: value,
      }
    })
  }

  const onChangeSelect = e => {
    console.log(e)
    const [value, name] = e.target
    setSelectValues(c => {
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

  return (
    <form>
      <legend>input form</legend>
      <Select contents={selectrContents} />
    </form>
  )
}

export default Form

Form.defaultProps = {
  title: 'Select form',
}

Form.propsTypes = {
  title: propsTypes.string,
}
