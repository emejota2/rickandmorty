import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="container spinner">
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
        </div>
    )
}

export default Spinner