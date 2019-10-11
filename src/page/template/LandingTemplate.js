import React from 'react'

const LandingTemplate = ({ components }) => {
  const { title, App, Form } = components
  return (
    <div>
      {App}
      {title}
      {Form}
    </div>
  )
}

export default LandingTemplate
