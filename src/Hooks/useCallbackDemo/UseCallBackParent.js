import React, { useState,useCallback } from 'react'
import AgeButton from './AgeButton';
import SalaryButton from './SalaryButton';

const UseCallBackParent = () => {
    const [age, setAge] = useState(12);
    const [salary, setSalary] = useState(5000);
    const ageHandler = useCallback(() => {
        setAge(age + 1);
    },[age])
    const salaryHandler = useCallback(() => {
        setSalary(salary + 500);
    },[salary]);
    return (
        <div>
            <h1>useCallback Demo</h1>
            <AgeButton clickHandler={ageHandler} age={age} />
            <SalaryButton clickHandler={salaryHandler} salary={salary} />
        </div>
    )
}

export default React.memo(UseCallBackParent);
