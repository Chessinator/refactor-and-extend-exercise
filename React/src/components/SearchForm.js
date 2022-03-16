import React from 'react';
import { useState } from 'react';
import CarValidator from "../validator/CarValidator.js";

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
        <form onSubmit={handleSubmit}>
            <label>Make:</label>
            <input type="text" name="make" value={make} onChange={handleMakeChange} />
            <br />
            <label>Year:</label>
            <input type="text" name="year" value={year} onChange={handleYearChange} />
            <br />
            <button type="submit">Validate</button>
        </form>
    )
}

export default SearchForm