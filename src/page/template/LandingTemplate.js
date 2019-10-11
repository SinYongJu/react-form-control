import React from 'react'

const LandingTemplate = ({ components }) => {
  const { App, Form } = components
  return (
    <div>
      {App}
      {Form}
    </div>
  )
}

export default LandingTemplate
