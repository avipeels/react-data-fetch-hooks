import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import AgeButton from './AgeButton';
import SalaryButton from './SalaryButton';

const UseCallBackParent = () => {
    const [age, setAge] = useState(12);
    const [salary, setSalary] = useState(5000);
    // useMemo
    const memoizedValue = useMemo(() => {
        // some complex computation work here..
        let i = 0;
        while (i < 2000000000) i++;

        // after while break then do something here
        if (age % 2 === 0) return "Even";
        else return "Odd";
    });
    // useRef
    const inputRef = useRef(null);
    useEffect(() => {

        if(inputRef && inputRef.current) {
            inputRef.current.focus();
        }

    }, [])
    // useCallback
    const ageHandler = useCallback(() => {
        setAge(age + 1);
    }, [age])
    const salaryHandler = useCallback(() => {
        setSalary(salary + 500);
    }, [salary]);
    return (
        <div>
            <h1>useCallback Demo</h1>
            <AgeButton clickHandler={ageHandler} age={age} />
            <SalaryButton clickHandler={salaryHandler} salary={salary} />
            <h2>{memoizedValue}</h2>
            <h3>UseRef Example</h3>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default React.memo(UseCallBackParent);
