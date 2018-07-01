import * as React from 'react'
import history from './history'

export default class Link extends React.Component<{ href: string }, {}> {
    buttonClicked = (e: any) => {
        history.push(this.props.href)
    }

    render() {
        return (
            <div onClick={ this.buttonClicked } >
                { this.props.children }
            </div>
        )
    }
}
