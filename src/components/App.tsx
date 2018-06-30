import * as React from 'react'
const reactLogo = require('./../assets/img/react_logo.svg')
import './../assets/scss/App.scss'

const App = () => (
  <div className='app'>
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo} height='480'/>
  </div>
)

export default App