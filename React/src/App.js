import { useState } from 'react';
import React from 'react';
import SearchForm from './components/SearchForm';
import Login from './components/Login'



const App = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    
      <div className="App">
        {isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
        <SearchForm setIsValid={setIsValid} />
      </div>
  )
}

export default App;
