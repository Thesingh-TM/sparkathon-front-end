import { useNavigate } from "react-router-dom";
import { useState  } from "react"
import axios from "axios";



function AddExpense() {

  
    
    return(
        <div className="form-container">
    <form>
      <div className="heading">
        <p>Add Expenses</p>
      </div>
      <label htmlFor="category">Category:</label>
      <select id="category" name="category">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" placeholder="Enter a title" />
      <label htmlFor="description">Description:</label>
      <div className="description-field">
        <textarea
          id="description"
          name="description"
          placeholder="Enter a description"
          defaultValue={""}
        />
      </div>
      <div className="expense-fields">
        <label htmlFor="purchase-status">Purchase Status:</label>
        <br />
        <select id="purchase-status" name="purchase-status">
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        <label htmlFor="expense-type">Expense Type:</label>
        <br />
        <select id="expense-type" name="expense-type">
          <option value="office-supplies">Office Supplies</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
          
        </select>
      </div>
      
      <div className="amount-date-fields">
        <label htmlFor="expense-amount">Expense Amount:</label>
        <br />
        <input
          type="text"
          id="expense-amount"
          name="expense-amount"
          placeholder="Enter the expense amount"
        />
        <label htmlFor="date-of-purchase">Date of Purchase:</label>
        <br />
        <input
          type="date"
          id="date-of-purchase"
          name="date-of-purchase"
          className="date"
        />
      </div>
      <input type="submit" value="Cancel" className="cancel" />
      <input type="submit" value="Plan Expenses" className="canceltwo" />
    </form>
  </div>
        
    )
}


export default AddExpense
