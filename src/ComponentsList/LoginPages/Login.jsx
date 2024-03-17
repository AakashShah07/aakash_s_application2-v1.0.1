import React, { useState, useEffect } from 'react';
import './style.css'
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [credentials, setcredentials] = useState({ username: "", password: "" });
  const [user, setuser] = useState(0);
  const [name , setName] = useState("login");
  const [bottext, setBot] = useState("Register Now")

  const navigate = useNavigate();
  const hadleSubmit = async (e) => {
    e.preventDefault();
    // const userName = await loginUser(credentials);
    const userName = "John Wick"
    if (!credentials.username && !credentials.password) {
      alert("Please enter username and password.");
      return;
    }

    else{
      navigate("/home");
    }
  };

  const textCLick = () => {
    setName(name === "Login" ? "Register Now" : "Login");
    setBot(bottext === "Register Now" ? "Login" : "Register Now")

  };

  const botClick =()=>{
    setBot(bottext === "Register Now" ? "Login" : "Register Now")
  }

  const myStyle ={
            margin: "6px"
  };
  

  const onChangee = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const changeUser =  (param) =>  {
    setuser(param);
    setcredentials({ username: `${param}@example.com`, password: "1234" });

    console.log("UserType: "+user);
    
  };
  
    return (
      <>
      <div className="card text-black" style={{ borderRadius: 100 + "px" }}>
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              
              <p className="text-left h3 mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

              <form className="mx-1 mx-md-4" onSubmit={hadleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="username"
                      value={credentials.username}
                      onChange={onChangee}
                      name="username"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                      UserName
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={onChangee}
                      id="passsword"
                      name="password"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4c">
                      Password
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button
                    type="button"
                    onClick={hadleSubmit}
                    className="btn btn-primary btn-lg"
                  >
                    {name}
                  </button>
                </div>
               
              </form>
              
            </div>
            
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>

          
        </div>
      </div>
    </>
    );
  }
    

export default Login
