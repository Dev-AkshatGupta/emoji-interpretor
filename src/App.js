import React , { useState } from "react";
import "./styles.css";

var emojidictionary=
{
  "😊":"smilingEmoji",
  "😀":"show me your teeth",
  "🤑":"money minded",
  "🐷":"pig face",

};
var emojisWeKnow = Object.keys(emojidictionary);

export default function App() {

var[emojiInput,emojiOutput]=useState("");
function textInput(event){
var userInput =event.target.value;
var emojiInput=emojidictionary[userInput];
if(emojiInput===undefined)
{
  emojiInput="this is not available in our data"
}
emojiOutput(emojiInput);
}
function clickHandler(emoji){
  var emojiInput=emojidictionary[emoji];
emojiOutput(emojiInput)
}


  return (
    <div className="App">
      <h1>Akshat likes</h1>
     <input onChange={textInput} ></input>
      <h2>Start editing to see some magic happen!</h2>
          <div>welcome he is the owner </div>
          <div>
            {emojiInput}
            </div>{
  map.emojisWeKnow(function (emoji){<span onClick={()=>clickHandler()})
            ></span>}
            </div>
          
  );
}
