import React from 'react'
import { NavBar } from './NavBar'
import { Card } from './Card'
import { DailyTransaction } from './DailyTransaction'
import { AddTransaction } from './AddTransaction'

export const Main = ({ transactions, addTransactions, deleteTransaction, resetSrno, clearTransactions }) => {
    return (
        <div className='main'>
            <NavBar />
            <h1>Daily Expense Tracker</h1>
            <DailyTransaction transactions={transactions} deleteTransaction={deleteTransaction} clearTransactions={clearTransactions} />
            <AddTransaction addTransactions={addTransactions} />
        </div>
    )
}
