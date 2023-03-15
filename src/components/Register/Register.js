import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'

import './Register.css';
export default function Register() {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
      cpassword,
      username,
    } = Object.fromEntries(new FormData(e.target));

    if(password !== cpassword){
     return navigate('/error')
    }

    authService.register(email,password,cpassword,username)
    .then(authData => userLogin(authData));
    ;
    navigate('/')
    
  }
  return (
    <div className="form">
      <div className="form-toggle" />
      <div className="form-panel one">
        <div className="form-header">
          <h1>Register account</h1>
        </div>
        <div className="form-content">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="required" />
            </div>
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}