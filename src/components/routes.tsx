import * as React from 'react'
import App from './App'

const routes = [
  { path: '/', action: () => <App />},
  { path: '/tasks', action: () => <p>Tasks</p> },
  { path: '/tasks/:id', action: () => <p>Specific task</p> }
]

export default routes