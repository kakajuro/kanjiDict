//日
import React, { useState } from 'react';

import './App.css';

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    if (!search) return;

    console.log("Searched: " + search);
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="searchbar-container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="search"
            className="searchbar"
            placeholder="Enter kanji..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form> 
      </div>
    </div>
  );
}

export default App;
