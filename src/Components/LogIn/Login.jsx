import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace:true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div className="content">
                <h2 className='form-title'>login</h2>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required></input>
                    </div>
                    <p style={{color:'red'}}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="form-submit" type="submit" value="Login" required />
                </form>
                <p className="link-form">
                    New to Ema-John ? <Link className="form-link" to="/signup">Create an account</Link>
                </p>
                <div className="others-part">
                    <div className="left-border"></div>
                    <span className="middle-part">or</span>
                    <div className="right-border"></div>
                </div>
                <div className="google-auth">
                    <button className="google-btn"><img src="https://img.icons8.com/color/48/undefined/google-logo.png" />Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;