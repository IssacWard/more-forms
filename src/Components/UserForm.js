const UserForm = (props) =>{
    const {inputs, CreateUser, handleChange} = props;
    return(
        <form onSubmit={CreateUser}>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={handleChange} value={inputs.firstname} name="firstname" />
                <span> {inputs.firstname.length >2 ? "" : "Name must be at least 2 characters long."}</span>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={handleChange} value={inputs.lastname} name="lastname" />
                <span> {inputs.lastname.length >2 ? "" : "Name must be at least 2 characters long."}</span>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handleChange} value={inputs.email} name="email" />
                <span> {inputs.email.length >2 ? "" : "Email must be at least 2 characters long."}</span>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handleChange} value={inputs.password} name="password" />
                <span> {inputs.password.length >8 ? "" : "Name must be at least 8 characters long."}</span>
                <span> {inputs.password == inputs.confirmPassword ? "" : "Passwords don't match."}</span>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={handleChange} value={inputs.confirmpassword} name="confirmPassword" />
            </div>
            <input type="submit" value="Create User" />
        </form>
    )
}

export default UserForm;

