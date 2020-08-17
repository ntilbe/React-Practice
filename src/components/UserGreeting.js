import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        //approach #4
        // return this.state.isLoggedIn && <div>Welcome Nicole</div>

        // approach #3 - ternary conditional operator
        return(
            this.state.isLoggedIn ? <div>Welcome Nicole</div>:<div>Welcome Guest</div>
        )

        // approach #2 - Element Variables
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Nicole</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // approach #1 - if/else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Nicole
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Welcome Nicole</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
