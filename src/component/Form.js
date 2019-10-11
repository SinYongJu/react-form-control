import React from 'react'
import propsTypes from 'prop-types'
import './Form.scss'
import Select from './Select'
import InputTxt from './InputTxt'
import Checkbox from './Checkbox'

const Form = ({ title }) => {
  const [selectValues, setSelectValues] = React.useState({
    nameValue: '',
    selectedValue: 'a',
    emailValue: '',
    addressValue: '',
    petValues: [],
    fruitValues: [],
  })

  const onChangeCheckboxValue = e => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    const checked = e.currentTarget.checked
    setSelectValues(c => {
      if (checked) {
        return {
          ...c,
          [name]: [...c[name], value],
        }
      } else {
        return {
          ...c,
          [name]: [...c[name]].filter(item => item !== value),
        }
      }
    })
  }

  const onChangeAddressValue = e => {
    const value = e.target.value
    const name = e.target.name
    setSelectValues(c => {
      return {
        ...c,
        [name]: value,
      }
    })
  }
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
  const onChangeEmailValue = e => {
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
    title: 'name',
    placeHolder: 'input name',
    name: 'nameValue',
    value: selectValues.nameValue,
    id: 'inputNameValue01',
    onChange: onChangeNameValue,
  }

  const inputEmailContents = {
    title: 'email',
    placeHolder: 'input email',
    name: 'emailValue',
    value: selectValues.emailValue,
    id: 'inputEmailValue01',
    onChange: onChangeEmailValue,
  }

  const inputAddressContents = {
    title: 'address',
    placeHolder: 'input address',
    name: 'addressValue',
    value: selectValues.addressValue,
    id: 'inputAddressValue01',
    onChange: onChangeAddressValue,
  }

  const checkboxPetContents = {
    title: 'check pet',
    onChange: onChangeCheckboxValue,
    id: 'pet',
    name: 'petValues',
    values: [
      {
        value: 'dog',
      },
      {
        value: 'cat',
      },
      {
        value: 'horse',
      },
    ],
  }
  const checkboxFruitContents = {
    title: 'check fruit',
    onChange: onChangeCheckboxValue,
    id: 'fruit',
    name: 'fruitValues',
    values: [
      {
        value: 'apple',
      },
      {
        value: 'orage',
      },
      {
        value: 'horse',
      },
    ],
  }

  return (
    <form>
      <legend>{title}</legend>
      <Select contents={selectrContents} />
      <InputTxt contents={inputNameContents} />
      <InputTxt contents={inputEmailContents} />
      <InputTxt contents={inputAddressContents} />
      <Checkbox contents={checkboxPetContents} />
      <Checkbox contents={checkboxFruitContents} />
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
