import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export const DailyTransaction = ({ transactions, deleteTransaction, clearTransactions }) => {

    const customSort = (a, b) => {
        const arrayA = a.date.split("/");
        const arrayB = b.date.split("/");

        if (arrayA[2] > arrayB[2]) {
            return 1;
        }
        else if (arrayA[2] === arrayB[2]) {
            if (arrayA[1] > arrayB[1]) {
                return 1;
            }
            else if (arrayA[1] < arrayB[1]) {
                return -1;
            }
            else if (arrayA[1] === arrayB[1]) {
                if (arrayA[0] > arrayB[0]) {
                    return 1;
                }
                else if (arrayA[0] < arrayB[0]) {
                    return -1;
                }
            }
        }
        else if (arrayA[2] < arrayB[2]) {
            return -1;
        }

        // Sorting by Alpabetical Order when dates are same
        if (arrayA[0] === arrayB[0] && arrayA[1] === arrayB[1] && arrayA[2] === arrayB[2]) {
            console.log("I'me in")
            if (a.name > b.name) {
                return 1;
                console.log("I'me in")
            }
            else if (a.name < b.name) {
                return -1;
            }
        }
        return 0;
    }

    const [toggle, setToggle] = useState(false);

    const sortedTransactions = transactions.sort(customSort);
    // const sortedTransactions = transactions.sort((a, b) => { return (a.date) - (b.date) })

    return (
        <div className="dailyTransaction">
            <div className="row head">
                <div className="srno">Sr No</div>
                <div className="date">Date</div>
                <div className="name">Name</div>
                <div className="amount">Amount</div>
                {/* <div className="edit">Edit</div> */}
                <div className="deletehead"></div>
            </div>
            {sortedTransactions.map((transaction) => (
                <div className="row">
                    <div className="srno" contentEditable={toggle}>{transaction.srno}</div>
                    <div className="date" contentEditable={toggle}>{transaction.date}</div>
                    <div className="name" contentEditable={toggle}>{transaction.name}</div>
                    <div className="amount" contentEditable={toggle}>&#8377; {transaction.amount}</div>


                    <FontAwesomeIcon icon={faTrash} className='delete' onClick={() => deleteTransaction(transaction.id)} />


                </div>
            ))}

            <div className="extras">
                <div className="edit" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <div className="clear" onClick={clearTransactions}>
                    <FontAwesomeIcon icon={faEraser} />
                </div>
            </div>
        </div>
    )
}
