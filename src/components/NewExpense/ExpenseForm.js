import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // shared change handler function
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredAmount(value)
        }
        else if (identifier === 'date') {
            setEnteredDate(value)
        }
        else {
            setEnteredAmount(value)
        }
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            Title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm