import { useNavigate } from "react-router-dom";
import { useState  } from "react"
import axios from "axios";
import Navbar from "../components/navbar";
import {ApexChart} from '../components/piechart'
import {ApexLineChart} from '../components/linechart'
 


function Dashboard() {

    const navigate = useNavigate();

    return(
        
       
            <div class= "main-container">
                <div>
                <Navbar/>
                </div>
                
                

         
                
            </div>
    
    )
}


export default Dashboard