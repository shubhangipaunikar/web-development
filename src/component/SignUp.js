import React, { useState } from 'react'
import './style.css';
const SignUp = () => {

const [user, setUser] = useState({
    name:"",
    email:"",
    phoneno:"",
    password:"",
    confirm_password:""
});

let name,value;

const handleInputs = (e) => {
    
    name = e.target.name;
    value = e.target.value;
    
    setUser({...user, [name]:value});
}
  return (
    <>
        <div className='container mx-auto'>
        <div class="row">
        <h4 className='text-center'>SignUp Form</h4>
          <div class="col-6 form-center">
            <form className="form-control">

              <div class="form-group">
                <input type="text" class="form-control" name="name"  placeholder="Full Name" autoComplete='Off' 
                    value={user.name}
                    onChange={handleInputs}
                />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="email" class="form-control" name="email"  placeholder="name@example.com" autoComplete='Off' 
                     value={user.email}
                    onChange={handleInputs}
                />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="text" class="form-control" name="phoneno"  placeholder="Phone Number" autoComplete='Off'
                 value={user.phoneno}
                    onChange={handleInputs} />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="Passsword" class="form-control" name="password"  placeholder="Password" autoComplete='Off'
                 value={user.password}
                    onChange={handleInputs} />
              </div>
              <br/>
              <div class="form-group">
                
                <input type="Password" class="form-control" name="confirm_password"  placeholder="Confirm Password"  autoComplete='Off'
                     value={user.confirm_password}
                    onChange={handleInputs}
                />
              </div>
              <br/>
              



              
              <button type="submit" class="btn btn-primary mt-10">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </>
    
  )
}

export default SignUp


