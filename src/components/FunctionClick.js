// type 'rfce' and push enter. The extension ES7 react snippet will create a functional component with ES7 module system
import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick={clickHandler} >Click</button>
        </div>
    )
}

export default FunctionClick
