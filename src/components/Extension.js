//日
import React, { useState } from 'react';
import './Extension.css';

import { AiOutlineGithub } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';

function urlExists(url, callback) {
  fetch(url, { method: 'head' })
  .then(function(status) {
    callback(status.ok)
  });
}

function Extension() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    if (!search) return;

    let url = 'https://kanjiapi.dev/v1/kanji/' + search;

    urlExists(url, function(exists) {
      if (exists) {
        fetch(url).then(response => response.json())
        .then(responseJSON => console.log(responseJSON.kanji))
      } else {
        console.log("URL not found");
      }
    });
    
    e.preventDefault();
  }

  const onGithubClicked = () => window.open("https://github.com/swishyDev/kanjiFinder.git");
  const onInfoClicked = () => console.log("Info screen");

  return (
    <div className="window">
      <div className="header-container">
        <h3 className="header">KanjiDict</h3>
        <div className="icons">
          <AiOutlineGithub className="icons github" size={28} onClick={() => onGithubClicked()}/>
          <IoMdSettings className="icons info" size={28} onClick={() => onInfoClicked()}/>
        </div>
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
      </div>
    </div>
  );
}

export default Extension;