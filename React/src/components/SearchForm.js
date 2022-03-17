import React from 'react';
import { useState } from 'react';
import CarValidator from "../validator/CarValidator.js";
import './components.css'

const SearchForm = ({ setIsValid }) => {
    const [make, setMake] = useState("");
    const [year, setYear] = useState("");

    const handleMakeChange = (event) => {
        setMake(event.target.value)
    }

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    // TODO REDUX?
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsValid(CarValidator({ make, year }))
    }

    return (
        <div>
            <form className="register-form" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Make:</label>
                    <input type="text" name="make" className="form-control" value={make} onChange={handleMakeChange} />
                </div>

                <div className="form-group">
                    <label>Year:</label>
                    <input type="text" name="year" className="form-control" value={year} onChange={handleYearChange} />
                </div>

                <div className="form-group">
                    <button type="submit">Validate</button>
                </div>



            </form>
        </div>
    )
}

export default SearchForm