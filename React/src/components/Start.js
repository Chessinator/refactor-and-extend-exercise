import React from "react";
import SearchForm from "./SearchForm";
import { useState } from 'react';

const Start = () => {

    const [isValid, setIsValid] = useState(false);

    return (
        <div className="App">
            {isValid ? <h2  className="text-success">Valid Vehicle</h2> : <h2  className="text-danger">Invalid Vehicle</h2>}
            <SearchForm setIsValid={setIsValid} />
        </div>
    )
}

export default Start;