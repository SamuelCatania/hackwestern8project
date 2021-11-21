import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const [currentTime, setCurrentTime] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/time')
  //   .then(response => {
  //     console.log("im over here!"); 
  //     console.log(response); 
  //     return response.json()})
  //   .then(data => {
  //     console.log(data);
  //     console.log("hello");
  //     setCurrentTime(data.somethingelse);
  //   });
  // }, []);

  
  import LoginPage from "./pages/LoginPage";
  import SignupPage from "./pages/SignupPage";
  
  function App() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>EASY MONEY SNIPERS</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path='/' element={<LoginPage/>} />
              <Route path="/sign-in" element={<LoginPage/>} />
              <Route path="/sign-up" element={<SignupPage/>} />
            </Routes>
          </div>
        </div>
      </div></Router>
    );
  }
  
  export default App;
