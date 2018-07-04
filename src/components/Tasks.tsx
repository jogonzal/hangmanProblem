import * as React from 'react'
const reactLogo = require('./../assets/img/react_logo.svg')
import './../assets/scss/App.scss'
import Clock from './Clock/Clock'
import Toggle from './Toggle'
import Link from './Link'
import NavBar from './NavBar/NavBar'

const Tasks = () => (
  <div>
      <NavBar />
      <h1>React + Typescript sample!</h1>
      <p>Foo to the barz x 2</p>
      <img src={reactLogo} height='480'/>
      <Clock input={ 'JORGE CLOCK 4' }/>
      <Clock input={ 'JORGE CLOCK 5' }/>
      <Clock input={ 'JORGE CLOCK 6' }/>
      <Toggle />
  </div>
)

export default Tasks