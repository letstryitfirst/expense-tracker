import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';

export const AddTransaction = ({ addTransactions }) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [srNo, setSrNo] = useState(1);

    const onEditField = (key, value) => {
        if (key === "name") {
            setName(value);
        }
        else if (key === "amount") {
            setAmount(value);
        }
        else if (key === "date") {
            let val = new Date(value).toLocaleDateString("en-GB");
            setDate(val);
        }

    };

    const setNewTransaction = () => {
        if (name === "" || amount === "") {
            alert("Enter Full Details!")
        }

        else if (date === "") {
            addTransactions(
                {
                    id: uuid(),
                    srno: srNo,
                    date: new Date().toLocaleDateString("en-GB"),
                    name: name,
                    amount: amount,
                    edit: false
                }

            );
        }

        else {
            setSrNo(srNo + 1);
            // setSrno(srNo);
            addTransactions(
                {
                    id: uuid(),
                    srno: srNo,
                    // date: new date.toLocaleDateString("en-GB", {
                    //     hour: "2-digit",
                    //     minute: "2-digit",
                    // }),
                    date: date,
                    name: name,
                    amount: amount,
                    edit: false
                }

            );
        }
    }

    return (
        <div className='addTransaction' >
            <div className="inputBox">
                <input type='date' onChange={(e) => onEditField("date", e.target.value)} />
            </div>
            <div className="inputBox">
                <input type="text" required onChange={(e) => onEditField("name", e.target.value)} />
                <span>Name</span>
            </div>
            <div className="inputBox">
                <input type="text" id='amount' required onChange={(e) => onEditField("amount", e.target.value)} />
                <span>Amount</span>
            </div>
            <button onClick={setNewTransaction}>+</button>
        </div>
    )
}
