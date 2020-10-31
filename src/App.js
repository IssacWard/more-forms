import './App.css';
import UserForm from './Components/UserForm'
import Results from './Components/Results'
import React, { useState } from 'react';

function App() {
  const [state,setState] = useState({
    firstname: "",
    lastname: "",
    email:"",
    password:"",
    confirmPassword:""
  });

  const CreateUser = e => {
    e.preventDefault();
    setState({
      firstname: "",
      lastname: "",
      email:"",
      password:"",
      confirmPassword:""
    })
  }
  const onChange = e => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}
  return (
    <div className="App">
      <UserForm inputs={state} handleChange={onChange} CreateUser={CreateUser}/>
      <Results data={state}/>
    </div>
  );
}

export default App;