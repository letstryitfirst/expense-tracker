import React, { useEffect, useState } from 'react'
import { Main } from './Main'
import { ConfirmDelete } from './ConfirmDelete';

export const Home = () => {

    const [transactions, setTransactions] = useState(localStorage.transactions ? JSON.parse(localStorage.transactions) : []);

    const [toggleConfirm, setToggleConfirm] = useState(false);

    const [deleteID, setDeleteID] = useState("");

    // const [sr, setSr] = useState(localStorage.srno ? JSON.parse(localStorage.srno) : 1);

    const [clear, setClear] = useState(false);

    // var srno = Number(localStorage.srno ? JSON.parse(localStorage.srno) : '1');

    useEffect(() => {

        localStorage.setItem("transactions", JSON.stringify(transactions));
        resetSrno();
    }, [transactions]
    );


    const onAddTransaction = (newTransact) => {
        const newTransaction = newTransact;
        setTransactions([newTransaction, ...transactions]);
        console.log(clear);
    }

    const onDeleteTransaction = (idToDelete) => {
        // console.log(idToDelete);
        setToggleConfirm(!toggleConfirm);
        setDeleteID(idToDelete);
    }

    const confirmDelete = (deleteConfirm) => {
        if (deleteConfirm) {
            setTransactions(transactions.filter((transaction) => transaction.id !== deleteID));
        }
        setToggleConfirm(!toggleConfirm);
        // console.log("Confirm Delete");
    }

    const clearTransactions = () => {
        setClear(!clear);
    }

    const confirmClear = (clearConfirm) => {
        if (clearConfirm) {
            setTransactions([]);
        }
        setClear(!clear);
    }

    // const setSrno = (newSrno) => {
    //     console.log("New: " + newSrno);
    //     // srno = newSrno; // Updates the storage value
    //     setSr(newSrno);
    //     console.log("New sr: " + sr);
    // }

    const resetSrno = () => {
        var srn = 1;
        transactions.forEach((transaction) => {
            transaction.srno = srn;
            srn = srn + 1;
        })
        setTransactions([...transactions]);
    }



    if (toggleConfirm) {
        return (
            <div className="home">
                <Main transactions={transactions} addTransactions={onAddTransaction} deleteTransaction={onDeleteTransaction} resetSrno={resetSrno} clearTransactions={clearTransactions} />
                <ConfirmDelete confirmDelete={confirmDelete} confirmClear={confirmClear} task={"Delete"} />
            </div>
        )
    }
    else if (clear) {
        return (
            <div className="home">
                <Main transactions={transactions} addTransactions={onAddTransaction} deleteTransaction={onDeleteTransaction} resetSrno={resetSrno} clearTransactions={clearTransactions} />
                <ConfirmDelete confirmDelete={confirmDelete} confirmClear={confirmClear} task={"Clear"} />
            </div>
        )
    }
    else {
        return (
            <div className="home">
                <Main transactions={transactions} addTransactions={onAddTransaction} deleteTransaction={onDeleteTransaction} resetSrno={resetSrno} clearTransactions={clearTransactions} />
            </div>
        )
    }
}
