import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/topics' component={Topics}/>
    </div>
  </Router>
)
export default BasicExample


// import * as React from 'react';
// import './../assets/scss/App.scss';

// const reactLogo = require('./../assets/img/react_logo.svg');

// export interface AppProps {
// }

// export default class App extends React.Component<AppProps, undefined> {
//     render() {
//         return (
//             <div className='app'>
//                 <h1>Hello World!</h1>
//                 <p>Foo to the barz</p>
//                 <img src={reactLogo} height='480'/>
//             </div>
//         );
//     }
// }
