import React from 'react';

const Results = ({data}) =>{
    const { firstname, lastname, email, password, confirmPassword} = data;
    return (
        <div>
            <h2>Results</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Results;
