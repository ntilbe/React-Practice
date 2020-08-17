import React, {Component} from 'react' // Component class from react

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
            
        }
    }

    // setState take two parameters. First, an object. Second, a callback arrow function
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => {
        //     console.log('Callback value', this.state. count)
        // }
        // )
        this.setState((prevState, props) => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter