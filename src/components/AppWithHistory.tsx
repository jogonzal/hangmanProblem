import * as ReactDOM from 'react-dom'
import history from './history'
import router from './router'
import routes from './routes'

const container = document.getElementById('root')
function renderComponent(component) {
  ReactDOM.render(component, container)
}
function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent))
}
render(history.location) // render the current URL
history.listen(render)               // render subsequent URLs