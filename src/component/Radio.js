import React from 'react'
import PropsType from 'prop-types'
import './Radio.scss'

const Radio = ({
  contents: { isMultiple, title, id, name, values, onChange, defaultVal },
}) => {
  return (
    <div className="Radio">
      <strong>{title}</strong>
      {values &&
        values.map((item, index) => {
          return (
            <div className="radio_comm" key={id + '__' + index}>
              <input
                type="radio"
                id={id + '_' + item.value}
                name={name}
                value={item.value}
                onChange={onChange}
                defaultChecked={
                  defaultVal
                    ? defaultVal === item.value
                    : index === 0
                    ? true
                    : false
                }
              />
              <label htmlFor={id + '_' + item.value}>{item.value}</label>
            </div>
          )
        })}
    </div>
  )
}

export default Radio
Radio.defaultProps = {
  contents: {
    id: 'testId',
    title: 'Radio test',
    name: 'test',
    values: [{ value: 'normal1' }, { value: 'normal2' }],
    defaultVal: 'normal2',
  },
}
Radio.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    name: PropsType.string,
    title: PropsType.string,
    values: PropsType.array,
    onChange: PropsType.function,
  }),
}
