import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'

import {userDataValidator} from '../../validators/userDataValidator'

import './Register.css';
export default function Register() {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    cpassword: '',
    username: ''
})
const [formValues, setFormValues] = useState({
  email: '',
  password: '',
  cpassword: '',
  username: ''
})

const onChange = (e) => {
  setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
}
const formChangeHandler = (e) => {
  const value = e.target.value;
  const inputName = e.target.name;
  
  let errors = userDataValidator(inputName, value)

  setFormErrors(errors);

};


  const onSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
      cpassword,
      username,
    } = Object.fromEntries(new FormData(e.target));

    if (password !== cpassword) {
      return navigate('/register')
    }

    authService.register(email, password, username)
      .then(authData => {
    
        if (authData.code != 200) {
          setErrorMessage(authData.message);
        }
        else {
          userLogin(authData);
          navigate('/');
        }
      })
      .catch(() => {
        navigate('/error')
      });

  }
  return (
    <div className="form">
      <div className="form-toggle" />
      <div className="form-panel one">
        <div className="form-header">
        {errorMessage !== '' &&
          <h2 style={{color:"red"}}>{errorMessage}</h2>}
          <h1>Register account</h1>
        </div>
        <div className="form-content">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              required="required" 
              value={formValues.email}
              onChange={onChange}
              onBlur={formChangeHandler}/>
            </div>
            {formErrors.email &&
                            <p className="errorMessage">{formErrors.email}</p>}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password"
               id="password"
                name="password"
                 required="required"
                 value={formValues.password}
                 onChange={onChange}
                 onBlur={formChangeHandler} />
            </div>
            {formErrors.password &&
                            <p className="errorMessage">{formErrors.password}</p>}
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input 
              type="password"
               id="cpassword"
               name="cpassword"
                required="required" 
                value={formValues.cpassword}
                onChange={onChange}
                onBlur={formChangeHandler}/>
            </div>
            {formErrors.cpassword &&
                            <p className="errorMessage">{formErrors.cpassword}</p>}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
               type="text" 
               id="username"
                name="username"
                 required="required"
                 value={formValues.username}
                 onChange={onChange}
                 onBlur={formChangeHandler}
                  />
            </div>
            {formErrors.username &&
                            <p className="errorMessage">{formErrors.username}</p>}
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}