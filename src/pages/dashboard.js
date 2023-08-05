import { useNavigate } from "react-router-dom";
import { useState  } from "react"
import axios from "axios";
import Navbar from "../components/navbar";
import {ApexChart} from '../components/piechart'
import {ApexLineChart} from '../components/linechart'
 


function Dashboard() {

    const navigate = useNavigate();

    // const [name,setName] = useState('')
    // const [username,setUsername] = useState('')
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    
    
  

    // async function submit(e){
    //     e.preventDefault()

    //     try{
    //         await axios.post("http://localhost:5000/register",{
    //         name,    
    //         email,
    //         username,
    //         password
    //         })
    //         .then(res => {
    //             if(res.data==="exist"){
    //                 alert("User already exist")
                    

    //             }
    //             else if(res.data==="Not exist") {
    //                 navigate("/" )
    //             }
    //         }).catch(e=>{
    //             alert("Wrong details")
    //             console.log(e)
    //         })
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }

    return(
        
       
            <div class= "main-container">
                <div>
                <Navbar/>
                </div>
                
                <div class="piechart-outer-container">
                    <h3>My Expenses</h3>

                    <ApexChart />
                </div>

                <div class="linechart-outer-container">
                    <ApexLineChart />
                </div>
                
                
            </div>
    
    )
}


export default Dashboard