import * as React from 'react'
const reactLogo = require('./../assets/img/react_logo.svg')
import './../assets/scss/App.scss'
import Clock from './Clock/Clock'
import Toggle from './Toggle'
import Link from './Link'

const App = () => (
  <div className='app'>
      <h1>React + Typescript sample!</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo} height='480'/>
      <Clock input={ 'JORGE CLOCK 1' }/>
      <Clock input={ 'JORGE CLOCK 2' }/>
      <Clock input={ 'JORGE CLOCK 3' }/>
      <Toggle />
      <Link href='/tasks' >
        <p>Please click me!</p>
      </Link>
  </div>
)

export default App