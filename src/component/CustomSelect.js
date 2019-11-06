import React from 'react'
import PropsType from 'prop-types'
import './CustomSelect.scss'

const ULLI = "ul li"

/**
 * 
 * 해당 로직을 일괄적으로 적용 하고 싶으다 
 * 
 */
const getFoucusTargetEl =(() => {
  const FOCUS_EL_SELECTOR = 'a,button,input,select'
  let count = 0;
  let nextEl =null;
  const type = {
    NEXT : 'nextElementSibling',
    PREV : 'previousElementSibling'
  }
  return (el,direction) => {
    nextEl = el[type[direction]]
    console.log(count)  
    if(nextEl&&nextEl.querySelector(FOCUS_EL_SELECTOR)){
      count = 0
      return nextEl.querySelector(FOCUS_EL_SELECTOR)
    }else{
      if(count < 3){
        count++
        return getFoucusTargetEl(nextEl,direction)
      }else{
        return null
      }
    }
  }
})()

const CustomSelect = ({
  contents: { id, value, name, title, optArr, onChange },
}) => {
  const [toggle, isToggle] = React.useState(false)
  const selectRef = React.useRef(null)
  const toggleHandler = e => {
    e.preventDefault()
    isToggle(c => !c)
  }

  const updateData = (e) => {
    onChange(e.target.dataset)
    e.target.blur()
    toggleHandler(e)
  }

  const enterKeyPressUpdateData = (e) => {
    if (e.keyCode === 13) {
      updateData(e)
    }
  }
  const keyDownHandler = e => {
    // console.dir(e.target)
    if (e.keyCode === 40) {
      //down
      if (e.target.nodeName === 'BUTTON') {
        !toggle && toggleHandler(e)
        return selectRef.current.querySelector(ULLI).focus()
      }
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.focus()
      } else {
        e.target.blur()
        toggleHandler(e)
        let nextFocusEl = getFoucusTargetEl(selectRef.current,'NEXT')
        if(nextFocusEl){
          nextFocusEl.focus()
        }
        
      }
    }
    if (e.keyCode === 38) {
      //up
      if (e.target.nodeName === 'BUTTON') {
        toggle && toggleHandler(e)
        // return selectRef.current.querySelector(ULLI).focus()
      }
      
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus()
      } else {
        e.target.blur()
        toggle && toggleHandler(e)
        let nextFocusEl = getFoucusTargetEl(selectRef.current,'PREV')
        if(nextFocusEl){
          nextFocusEl.focus()
        }
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
                // href="#none"
                tabIndex={index}  
                data-value={item}
                data-name={name}
                data-id = {id}
                onClick={updateData}
                onKeyDown = {enterKeyPressUpdateData}
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
