import React from 'react';
import "./KanjiDef.css";

function KanjiDef(props) {
    return (
        <div className="object">
            <p>{props.kanji}</p>
        </div>
    );
}

export default KanjiDef;