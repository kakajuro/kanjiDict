//日
import React, { useState } from 'react';

import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import './App.css';

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    if (!search) return;

    console.log("Searched: " + search);
    e.preventDefault();
  }

  const onGithubClicked = () => window.open("https://github.com/swishyDev/kanjiFinder.git");
  const onInfoClicked = () => console.log("Info screen");

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
          <AiOutlineGithub className="icons github" size={34} onClick={() => onGithubClicked()}/>
          <AiOutlineInfoCircle className="icons info" size={34} onClick={() => onInfoClicked()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
