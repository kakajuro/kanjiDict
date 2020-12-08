//日
import React, { useState, useEffect } from 'react';
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
  const [searchResultText, setSearchResultText] = useState("");

  const onGithubClicked = () => window.open("https://github.com/swishyDev/kanjiFinder.git");
  const onInfoClicked = () => console.log("Info screen");

  useEffect(() => {
    setSearchResultText("");
  }, [])

  const handleSubmit = e => {
    if (!search) {
      return;
    };

    let url = 'https://kanjiapi.dev/v1/kanji/' + search;

    urlExists(url, function(exists) {
      if (exists) {
        fetch(url).then(response => response.json())
        .then(responseJSON => {
          setSearchResultText("Kanji found");
          console.log(responseJSON.kanji)
        })
      } else {
        setSearchResultText("Kanji not found");
      }
      
    });
    
    e.preventDefault();
  }

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
      <div className="response-container">
        <div className="kanji-found">
          <p>{searchResultText}</p>
        </div>

      </div>
    </div>
  );
}

export default Extension;