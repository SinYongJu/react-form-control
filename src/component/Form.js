import React from 'react'
import propsTypes from 'prop-types'
import './Form.scss'
import Select from './Select'
import InputTxt from './InputTxt'
import Checkbox from './Checkbox'
import Radio from './Radio'
import CustomSelect from './CustomSelect'

const defaultFormat = {
  nameValue: '',
  abcdValue: 'a',
  emailValue: '',
  addressValue: '',
  petValues: [],
  fruitValues: [],
  colorValue: null,
  customAbcdValue: 'd',
}

const Form = ({ title }) => {
  const [selectValues, setSelectValues] = React.useState(defaultFormat)

  const onSubmitHandler = e => e.preventDefault()
  const onClickResultHandler = e => console.log(selectValues)
  const onClickResetHandler = e => setSelectValues(defaultFormat)

  const onChangeRadioValue = e => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    const checked = e.currentTarget.checked
    setSelectValues(c => {
      if (checked) {
        return {
          ...c,
          [name]: value,
        }
      }
      return
    })
  }

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
    title: 'select abcd',
    name: 'abcdValue',
    optArr: ['a', 'b', 'c', 'd'],
    value: selectValues.abcdValue,
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

  const radioColorContents = {
    isMultiple: false,
    title: 'Pick fruit',
    name: 'colorValue',
    onChange: onChangeRadioValue,
    defaultVal: selectValues['colorValue'],
    values: [
      {
        value: 'red',
      },
      {
        value: 'blue',
      },
      {
        value: 'yellow',
      },
      {
        value: 'pink',
      },
    ],
  }

  const onChangeCustomSelect = ({ value, name }) => {
    console.log(value)
    setSelectValues(c => ({
      ...c,
      [name]: value,
    }))
  }

  const customSelectrContents = {
    title: 'select Custom abcd',
    name: 'customAbcdValue',
    optArr: ['a', 'b', 'c', 'd'],
    value: selectValues.customAbcdValue,
    id: 'customSelect01',
    onChange: onChangeCustomSelect,
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <legend>{title}</legend>
      <strong>custom</strong>
      <CustomSelect contents={customSelectrContents} />
      <strong>group1</strong>
      <Select contents={selectrContents} />
      <InputTxt contents={inputNameContents} />
      <InputTxt contents={inputEmailContents} />
      <InputTxt contents={inputAddressContents} />
      <strong>group2</strong>
      <Checkbox contents={checkboxPetContents} />
      <Checkbox contents={checkboxFruitContents} />
      <Radio contents={radioColorContents} />
      <button
        type="button"
        className="btn_form btn_result"
        onClick={onClickResultHandler}
      >
        Result
      </button>
      <button
        type="button"
        className="btn_form btn_reset"
        onClick={onClickResetHandler}
      >
        Reset
      </button>
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
