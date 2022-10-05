import React, { useState } from 'react';

export default function MyForm({ setUser, setShowQuestions }) {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setUser(inputs);
      setShowQuestions(true);
    }
  
    return (
        <>
        <div className="login-box">
        <h1>Get Started</h1>
            <form onSubmit={handleSubmit}>
            <div className="user-box">
                <input 
                type="text" 
                name="username" 
                placeholder='Full Name'
                value={inputs.username || ""} 
                onChange={handleChange}
                />
            </div>
            <div className="user-box">
                <input 
                    type="number" 
                    name="age"
                    placeholder='Age'
                    value={inputs.age || ""} 
                    onChange={handleChange}
                />
                </div>
                <input value="Next" type="submit" className="submit-button"/>
            </form>
        </div>
      </>
    )
  }