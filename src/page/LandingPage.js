import React from 'react'
import LandingTemplate from './template/LandingTemplate'
import H1 from '../component/H1'
import Form from '../component/Form'
const LandingPage = () => {
  const title = 'control form'
  const components = {
    App: <H1>{title}</H1>,
    title: <h2>form control</h2>,
    Form: <Form></Form>,
  }
  return <LandingTemplate components={components}></LandingTemplate>
}

export default LandingPage
