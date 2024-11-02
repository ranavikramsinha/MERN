import React, { useRef, useState } from 'react'

const TestForm = () => {

    console.log("Paint TestForm Component");

    const [firstNameVal, setFirstNameVal] = useState();

    const click = useRef(0);
    const firstName = useRef();
    const lastName = useRef();
    const dob = useRef();

    const firstNameChangeHandler = (event) => {
        setFirstNameVal(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Button Clicked");
        // console.log(firstName.current.value);
        // console.log(lastName.current.value);
        // console.log(dob.current.value);
    }

    // const obj ={
    //     "firstName": "Aryan",
    //     "lastName": "Sinha",
    //     "dob": "18/10/2024",
    // }

    // const handleOnChange = (event) => {
    //     firstName.current = event.target.value;
    //     console.log(firstName.current);
    // }

  return (
    <>
    <div className="text-center">
        <h1>StateValue: {firstNameVal} RefValue: {click.current} times</h1>
        <form action="/submit-data" onSubmit={submitHandler}>
            <div><input type="text" ref={firstName} onKeyDown={firstNameChangeHandler} placeholder='First Name' name="firstName" /></div>
            <div><input type="text" placeholder='Last Name' ref={lastName} name="lastName" /></div>
            <div>
            <label htmlFor="dob" className='btn btn-primary'>DOB</label>
            <input type="date" id="dob" name='dob' ref={dob}/>
            </div>
            <input type="submit" value="Submit" onClick={() => click.current++}/>
        </form>
    </div>
    </>
  )
}

export default TestForm