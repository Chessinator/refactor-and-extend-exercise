import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"

const SignUp = () =>{
        return (
            <form className="register-form">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="form-group"> 
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Repeat password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p  className="forgot-password text-right">Already registered<NavLink className="nav-link nav-link-inline" to={"/sign-in"}>sign in?</NavLink>
                </p>
            </form>
        );
}
export default SignUp;
