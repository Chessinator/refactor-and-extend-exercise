
import React from 'react';
import Login from './components/Login'
import { NavLink } from 'react-router-dom';
import SignUp from './components/SignUp';
import { Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Start from './components/Start';


const App = () => {

  const path = window.location.pathname;

  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/sign-in"}>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/sign-up"}>Sign up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
      
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/start" element={<Start />} />
          </Routes>
          
        </div>
      </div>
    </div>


  )
}

export default App;
