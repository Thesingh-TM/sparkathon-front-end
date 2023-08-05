import { useState} from 'react'
import { useNavigate  , Link } from "react-router-dom";
// import img from "../images/pic.png"
import axios from 'axios';
import { useCookies } from "react-cookie";



function Login() {
    const navigate = useNavigate();



    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [cookies, setCookies] = useCookies('');
    
   

        return(

            <div class="login-container">
                <div class="image-section">
                   
                    <img src="images/pic.png" alt="Login Image"/>
                </div>
                <div class="login-section">
                    
                    <form class="form-container">
                        <img src="images/logo.png"/>
                        <p class="signin">Sign in</p>
                        <p class="signinmssg">Welcome please enter your details</p>
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required/>
                        <div class="btn-group">
                            <button type="submit" class="login-btn">Log In</button>
                        </div>
                        <p class="or">OR</p>
                        <div class="btn-groupone">
                            <button type="submit" class="register-btn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>

            
            




        )

}

export default Login