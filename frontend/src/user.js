import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function UserForm({ setUser, setShowQuestions }) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
	const risen_key = (new URLSearchParams(window.location.search)).get("risen_key");

	const notify = () => toast.error('Please provide all information',{
	  duration: 3000,
	  position: 'bottom-center',
      style: {background:"#252d4a", color:"white"}
	});

	const notifyTokenFailure = () => toast.error('Please contact your health coach for a new link.',{
	  duration: 3000,
	  position: 'bottom-center',
	  style: {background:"#252d4a", color:"white"}
	});


	const verifyToken = () => {
		return axios.get(`https://backend-production-5b2e.up.railway.app/validate?risen_key=${risen_key}`);	
	}

	const handleSubmit = (event) => {
	  event.preventDefault();
	  if(inputs['username'] !== undefined && inputs['age'] !== undefined){ 
		  verifyToken()
			  .then(e => {
				setUser(inputs);
				setShowQuestions(true);	
			  })
			  .catch(err => {
				  notifyTokenFailure()
			  }); 
	  }
	  else {	  
		notify();	
	  }
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
