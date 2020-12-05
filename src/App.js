//日
import React, { useState, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';

import './App.css';

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    if (!search) return;

    console.log("Searched: " + search);
    e.preventDefault();
  }

  return (
    <div className="window">
      <div className="top-container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="search"
            className="searchbar"
            placeholder="Enter kanji..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            autoFocus={true}
          />
        </form>
        <div className="icons">
          <AiFillGithub className="icons github" size={40}/>
        </div>
      </div>
    </div>
  );
}

export default App;
