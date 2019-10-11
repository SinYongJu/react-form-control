import React from 'react'
import './InputTxt.scss'
import PropsType from 'prop-types'

const InputTxt = ({
  contents: { id, title, name, onChange, value, placeHolder },
}) => {
  return (
    <div className="InputTxt">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default InputTxt

InputTxt.defaultProps = {
  contents: {
    id: 'testId',
    title: 'InputTxt test',
    name: 'test',
    value: 'input your value',
    placeHolder: 'input your text',
  },
}
InputTxt.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    name: PropsType.string,
    title: PropsType.string,
    value: PropsType.number,
    onChange: PropsType.function,
  }),
}
