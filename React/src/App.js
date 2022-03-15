import { useState } from 'react';
import React from 'react';
import CarValidator from "./validator/CarValidator.js";

const App = () => {

  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleMakeChange = (event) => {
    setMake(event.target.value)
  }  

  const handleYearChange = (event) => {
    setYear(event.target.value)
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(CarValidator({ make, year }))
  }
  

  return (
     <div className="App">
        {isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
        <form onSubmit={handleSubmit}>
          <label>Make:</label>
          <input type="text" name="make" value={make} onChange={handleMakeChange} />
          <br />
          <label>Year:</label>
          <input type="text" name="year" value={year} onChange={handleYearChange} />
          <br />
          <button type="submit">Validate</button>
        </form>
      </div>
  )
}

export default App;
