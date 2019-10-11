import React from 'react'
import './Select.scss'
import PropsType from 'prop-types'

const Select = ({ contents: { title, name, optArr, id, value, onChange } }) => {
  return (
    <div className="select_comm">
      <strong>{title}</strong>
      <em> selected value : {value}</em>
      <select id={id} onChange={onChange} name={name} value={value}>
        {optArr && optArr.map((item, key) => <option key={key}>{item}</option>)}
      </select>
    </div>
  )
}

export default Select

Select.defaultProps = {
  contents: {
    id: 'testId',
    title: 'Select test',
    name: 'test',
    optArr: [1, 2, 3, 4, 5],
    value: 1,
  },
}
Select.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    name: PropsType.string,
    title: PropsType.string,
    optArr: PropsType.array,
    value: PropsType.number,
    onChange: PropsType.function,
  }),
}
