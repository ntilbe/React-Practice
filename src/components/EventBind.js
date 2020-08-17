import React, { Component } from 'react'

class EventBind extends Component {
    //type 'rconst' will enter the constructor bones needed
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) /* this is the third and most popular way to bind (includes line 28) */
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    //     console.log(this)
    // }

    //Fourth way to bind event handler
    clickHandler = () => {
        this.setState({
            message:'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> this is the first way*/} 
                {/* <button onClick={() => this.clickHandler()}>Click</button> this is the second way */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
// approach #3 or 4 is suggested as the best practices 
export default EventBind
