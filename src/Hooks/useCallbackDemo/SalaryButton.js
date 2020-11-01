import React from 'react'

const SalaryButton = ({ clickHandler, salary }) => {
    console.log(`Salary button rendered salary: ${salary}`);

    return (
        <button onClick={clickHandler}>Increment Salary</button>
    )
}

export default React.memo(SalaryButton);
