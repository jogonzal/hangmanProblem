import * as React from 'react'
import createHistory from 'history/createBrowserHistory'

export default class Link extends React.Component<{ href: string }, {}> {
    buttonClicked = (e: any) => {
        history
    }

    render() {
        return (
            <div>
                <button  onClick={ this.buttonClicked }/>
            </div>
        )
    }
}
