import React, {Component} from 'react' // Component class from react

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing!'
        })

    }

    render(){
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={ () => this.changeMessage()}>Subscribe</button>
            
            </div>
        )
    }
}

export default Message // connects this file to the rest of our application