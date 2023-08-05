import { useNavigate } from "react-router-dom";
import { useState  } from "react"
import axios from "axios";

function Register() {

    const navigate = useNavigate();

    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    
  


    return(
        <div className="login-container">
        <div className="image-section">
       
          <img src="images/pic.png" alt="Login Image" />
        </div>
        <div className="login-section">
          <form className="form-container">
            <img src="images/logo.png" />
            <p className="signin">Register</p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required="" />
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" name="email" required="" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required="" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required=""
            />
            
       
            <div className="btn-groupone">
              <button type="submit" className="register-btn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}


export default Register