import React, { useState } from "react";

function App() {
  //create a stateful constant with initial state of blank
  const [inputText, setInputText] = useState("");
  //create an array for all items
  const [items, setItems] = useState([]);

  function handleChange(event) {
    //create a new constant that gets hold of the new entered value
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="item"
          type="text"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })} */}
          {/* //simplify the code */}
          {/* map through all of the items 
          for each to-do item, create an li and 
          put the to-do item in that li */}
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
