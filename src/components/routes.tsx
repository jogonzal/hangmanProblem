import * as React from 'react'
import App from './App'
import Tasks from './Tasks'

const routes = [
  { path: '/', action: () => <App />},
  { path: '/tasks', action: () => <Tasks /> },
  { path: '/otherThing', action: () => <p>otherThing</p> },
  { path: '/tasks/:id', action: () => <p>Specific task</p> }
]

export default routes