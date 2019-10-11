import React from 'react'
import './Checkbox.scss'
import PropsType from 'prop-types'

const Checkbox = ({ contents: { title, id, name, values, onChange } }) => {
  return (
    <div className="Checkbox">
      <strong>{title}</strong>
      {values &&
        values.map((item, index) => {
          return (
            <div className="check_comm" key={id + '__' + index}>
              <input
                type="checkbox"
                id={id + '_' + item.value}
                name={name}
                value={item.value}
                onChange={onChange}
              />
              <label htmlFor={id + '_' + item.value}>{item.value}</label>
            </div>
          )
        })}
    </div>
  )
}

export default Checkbox

Checkbox.defaultProps = {
  contents: {
    id: 'testId',
    title: 'Checkbox test',
    name: 'test',
    values: [{ value: 'normal' }],
  },
}
Checkbox.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    name: PropsType.string,
    title: PropsType.string,
    values: PropsType.array,
    onChange: PropsType.function,
  }),
}
