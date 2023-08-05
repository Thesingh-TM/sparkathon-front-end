import React from 'react';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";


const Welcome = () => (
  
  <Card
    
    bordered={false}
    style={{
      width: '100%',
      height:'20%',
      background:'#1B5676',
      color:'white'

    }
  }
  >
    
    
        <div>
          <div>
            <h2 class="welcome-text">Welcome back !</h2>
            <p class="welcome-text">Made some purchases ? Add your expenses for easy tracking</p>
            <button >Add Expense</button>
          </div>
        </div>
    
   
    
  </Card>
);

export default Welcome;