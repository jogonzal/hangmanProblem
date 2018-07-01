import * as React from 'react'
type State = {
    isToggleOn: boolean
}

export default class Toggle extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}