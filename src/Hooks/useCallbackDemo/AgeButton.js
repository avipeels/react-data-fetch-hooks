import React from 'react'

const AgeButton = ({ clickHandler, age }) => {
    console.log(`Age button rendered age: ${age}`);
    return (
        <button onClick={clickHandler}>Increment Age</button>
    )
}

export default React.memo(AgeButton)
