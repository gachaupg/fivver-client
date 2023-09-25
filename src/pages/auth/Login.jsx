import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formValue, setFormValue] = useState({
   password:"",
    email: '',
    
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="login" >
        <h3>Welcome to mybirdie... Login in here</h3>
    <MDBValidation className='login-form g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
        //   value={formValue.email}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
       
        //   value={formValue.password}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
     
      
      
      <div className='col-md-4'>
        <MDBBtn style={{width:"100%",height:"2.8rem"}} type='submit'>Submit </MDBBtn>
      </div>
      <p>
      if dont have account <Link to='/register'>Register here</Link>

      </p>

      <p>Forget password</p>
    </MDBValidation>
    </div>
  );
}

