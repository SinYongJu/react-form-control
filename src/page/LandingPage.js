import React from 'react'
import LandingTemplate from './template/LandingTemplate'
import App from '../component/App'
import Form from '../component/Form'
const LandingPage = () => {
  const components = {
    App: <App></App>,
    Form: <Form></Form>,
  }
  return <LandingTemplate components={components}></LandingTemplate>
}

export default LandingPage
