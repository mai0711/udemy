import React, { useRef } from 'react';
import "./Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const username= useRef();
    const email = useRef(); //emailに入力された値を参照(email input にref指定)
    const password = useRef();
    const confirmPassword = useRef();

    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        //パスワードと確認パスワードが同じか
        if(password.current.value !== confirmPassword.current.value){
            confirmPassword.current.setCustomValidity("Incorrect Password"); //setCustomValidity = あってるかを自動で確認してくれる
        }else {
            try{
                //userの登録
                const user ={
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post("/auth/register", user);
                navigate("/login");
            }catch(err){
                console.log(err)
            }
        }
    };

  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Real SNS</h3>
                    <span className="loginDesc">Create SNS by yourself!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleClick(e)}>
                        <p className="loginMsg">Register an account</p>
                        <input
                        type="text"
                        className="loginInput"
                        placeholder="Username"
                        required
                        ref={username}
                        />
                        <input
                        type="email"
                        className="loginInput"
                        placeholder="Email"
                        required
                        ref={email}
                        />
                        <input
                        type="password"
                        className="loginInput"
                        placeholder="Password"
                        required
                        minLength="6"
                        ref={password}
                        />
                        <input
                        type="password"
                        className="loginInput"
                        placeholder="Confirm Password"
                        required
                        minLength="6"
                        ref={confirmPassword}
                        />
                        <button className="loginButton" type="submit">
                        Sign Up
                        </button>
                        <button className="loginRegisterButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
