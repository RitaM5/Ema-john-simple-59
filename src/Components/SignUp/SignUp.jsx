import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be six characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div className="content">
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password"> Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required></input>
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className="form-submit" type="submit" value="Sign Up" required />
                </form>
                <p className="link-form">
                    Already have an account ? <Link className="form-link" to="/login">Please login</Link>
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

export default SignUp;