import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.css';

export default function Login() {
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();
   
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email,password)
        .then(authData =>{
            userLogin(authData);
            navigate('/');

        }).catch(() => {
            navigate('/error')
        })
    };


    return (
        <div className="form">
            <div className="form-toggle" />
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Account Login</h1>
                </div>
                <div className="form-content">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required="required"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required="required"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-remember">
                                <input type="checkbox" />
                                Remember Me
                            </label>
                            <a className="form-recovery" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="form-group">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}