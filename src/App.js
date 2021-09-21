import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "😊": "smilingEmoji",
  "😀": "show me your teeth",
  "🤑": "money minded",
  "🐷": "pig face"
};
var emojisWeKnow = Object.keys(emojidictionary);

export default function App() {
  var [emojiInput, emojiOutput] = useState("");
  function textInput(event) {
    var userInput = event.target.value;
    var emojiInput = emojidictionary[userInput];
    if (emojiInput === undefined) {
      emojiInput = "this is not available in our data";
    }
    emojiOutput(emojiInput);
  }

  function emojiClickHandler(emoji) {
    var emojiInput = emojidictionary[emoji];
    emojiOutput(emojiInput);
  }

  return (
    <div className="App">
      <h1>Akshat likes</h1>
      <input onChange={textInput}></input>

      <div>{emojiInput}</div>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "3rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
