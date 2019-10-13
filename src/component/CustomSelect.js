import React from 'react'
import PropsType from 'prop-types'
import './CustomSelect.scss'

const CustomSelect = ({
  contents: { id, value, name, title, optArr, onChange },
}) => {
  const [toggle, isToggle] = React.useState(false)
  const selectRef = React.useRef(null)
  const toggleHandler = e => {
    console.log(e.type, e.currentTarget)
    e.preventDefault()
    isToggle(c => !c)
  }
  React.useEffect(() => {
    Array.from(document.querySelectorAll('ul li')).map((item, index, arr) => {
      item.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          onChange(e.target.dataset)
          item.blur()
          toggleHandler(e)
        }
      })
      item.addEventListener('click', e => {
        onChange(e.target.dataset)
        item.blur()
        toggleHandler(e)
      })
    })
  }, [onChange])

  const keyDownHandler = e => {
    // console.dir(e.target)
    if (e.keyCode === 40) {
      //down
      if (e.target.nodeName === 'BUTTON') {
        !toggle && toggleHandler(e)
        return selectRef.current.querySelector('ul li').focus()
      }
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.focus()
      } else {
        e.target.blur()
        toggleHandler(e)
        selectRef.current.querySelector('button').focus()
      }
    }
    if (e.keyCode === 38) {
      //up
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus()
      } else {
        e.target.blur()
        toggleHandler(e)
        selectRef.current.querySelector('button').focus()
      }
    }
  }

  return (
    <div
      ref={selectRef}
      className={`CustomSelect${toggle ? ' on' : ''}`}
      id={id}
      onKeyDown={keyDownHandler}
    >
      <button type="button" onClick={toggleHandler}>
        <strong>{title}</strong>
      </button>
      <em>{value}</em>
      <ul>
        {optArr &&
          optArr.map((item, index) => {
            // let isLast = optArr.length - 1 === index || 0 === index
            return (
              <li
                key={item + '__' + index}
                tabIndex={0}
                data-value={item}
                data-name={name}
              >
                {item}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CustomSelect

CustomSelect.defaultProps = {
  contents: {
    id: 'testId',
    name: 'CustomSelectName',
    title: 'CustomSelect test',
    value: 'normal',
    optArr: [{ value: 'normal' }, { value: 'normal1' }, { value: 'normal3' }],
  },
}
CustomSelect.PropsType = {
  contents: PropsType.shape({
    id: PropsType.string,
    title: PropsType.string,
    name: PropsType.string,
    optArr: PropsType.array,
    onChange: PropsType.function,
  }),
}
