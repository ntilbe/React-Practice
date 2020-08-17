// functional component example
import React from 'react'

// function Greet() {
//     return <h1>Hello Nicole</h1>
// }

//{name, heroName} instead of (props) there on line 9, is destructuring props in the parameters
const Greet = props => {
    const {name, heroName} = props // putting props on line 9 and then this line is destructuring props in the function body
return (
    <div>
        <h1>
            Hello {name} a.k.a. {heroName}
        </h1>
        {/* {props.children} */}
    </div>
)
}

export default Greet