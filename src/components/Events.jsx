// import React from 'react'

const Events = () => {
  const bgcolorlight = () => {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "navy";
  };
  const bgcolordark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };
  const btnstyle = {
    backgroundColor: "navy",
    color: "white",
    fontSize: "25px",
  };
  const showAlert = () => {
    alert("Button clicked!");
  };
  let count = 0;
  console.log("Counter value before : " + count);
  let counter = (value) => {
    alert("This is new Value : " + value); 
    console.log("Counter value after : " + count);
  };
  return (
    <>
      <h1>Events</h1>
      <button style={btnstyle} onClick={showAlert}>
        Click Me
      </button>
      <br />
      <button style={btnstyle} onMouseOver={bgcolorlight}>
        Light Mode
      </button>
      <button style={btnstyle} onMouseOver={bgcolordark}>
        Dark Mode
      </button>
      <h1>Counter: {count}</h1>
      <button onClick={() => counter(20)}>CountBtn</button>
    </>
  );
};

export default Events;
