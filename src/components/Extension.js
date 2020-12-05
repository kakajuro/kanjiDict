//日
import React, { useState } from 'react';

import { AiOutlineGithub } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';

import './Extension.css';

function Extension() {
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
      <div className="header-container">
        <h3 className="header">KanjiDict</h3>
      </div>
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
          <BiInfoCircle className="icons info" size={34} onClick={() => onInfoClicked()}/>
        </div>
      </div>
    </div>
  );
}

export default Extension;