import * as React from 'react'
import history from './history'

export default class Link extends React.Component<{ href: string, className?: string }, {}> {
    buttonClicked = (e: any) => {
        history.push(this.props.href)
    }

    render() {
        return (
            <a onClick={ this.buttonClicked } className={this.props.className} >
                { this.props.children }
            </a>
        )
    }
}
