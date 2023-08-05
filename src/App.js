import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Login from './pages/login'; 
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import AddExpense from './pages/add-Expense';
import { useNavigate } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div >
          <header>
        
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} ></Route>
                {/* <Route path="/product/:pid" element={< ProductScreen />} > </Route> */}
                <Route path ="/login" element ={ <Login /> } ></Route>
                <Route path ="/register" element ={ <Register /> } ></Route>
               
                <Route path="/addExpense" element={ < AddExpense /> } ></Route>
               
              </Routes>
              
            </main>
          
            
          </header>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
