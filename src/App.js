import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      <HocRed component={Counter} />
	  <HocBlue component={Counter} />
	  <HocGreen component={Counter} />
    </div>
  );
}

// higher order components are components that take component as input and return component as output
// with some modification
function HocRed(props) {
  return (
    <>
      <div style={{ backgroundColor: "red" , width: 100}}>
        <props.component />
      </div>
    </>
  );
}

function HocBlue(props) {
	return (
	  <>
		<div style={{ backgroundColor: "blue" , width: 100}}>
		  <props.component />
		</div>
	  </>
	);
  }

  function HocGreen(props) {
	return (
	  <>
		<div style={{ backgroundColor: "green" , width: 100}}>
		  <props.component />
		</div>
	  </>
	);
  }

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
}
