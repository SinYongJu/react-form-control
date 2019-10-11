import React from 'react'
import './InputTxt.scss'
import PropsType from 'prop-types'

const InputTxt = () => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" id="" />
    </div>
  )
}

export default InputTxt
InputTxt.defaultProps = {
  contents: {
    id: 'testId',
    title: 'InputTxt test',
    name: 'test',
    optArr: [1, 2, 3, 4, 5],
    value: 1,
  },
}
InputTxt.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    name: PropsType.string,
    title: PropsType.string,
    optArr: PropsType.array,
    value: PropsType.number,
    onChange: PropsType.function,
  }),
}
