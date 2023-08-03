import React from 'react'
import "./Login.css";
import { useContext, useRef } from 'react';
import { loginCall } from '../../state/ActionCalls';
import { AuthContext } from '../../state/AuthContext';

export default function Login() {

    const email = useRef(); //emailに入力された値を参照(email input にref指定)
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext); // AuthContext.jsのvalueを使うことができるように

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value)
        loginCall( //ActionCalls.jsから
            {
                email: email.current.value,
                password: password.current.value,
            },
            dispatch //AuthContext.jsのvalue
        );
    };

    console.log(user)

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Real SNS</h3>
                <span className="loginDesc">Create SNS by yourself!</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="loginMsg">Login</p>
                    <input
                    type="email"
                    className="loginInput"
                    placeholder="Email"
                    required
                    ref={email} //useRef
                    />
                    <input
                    type="password"
                    className="loginInput"
                    required
                    minLength="6"
                    placeholder="Password"
                    ref={password}
                    />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forget your password</span>
                    <button className="loginRegisterButton">Create an account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
