import React from 'react'

export const ConfirmDelete = ({ confirmDelete, confirmClear, task }) => {
    return (
        <div className="confirmDelete">
            <div className="box">
                <p>Are you sure to {task}?</p>
                <div className="btn">
                    <button onClick={task === "Delete" ? () => confirmDelete(true) : () => confirmClear(true)}>Yes</button>
                    <button onClick={task === "Delete" ? () => confirmDelete(false) : () => confirmClear(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
