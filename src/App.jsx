import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialState = 0;
const reducer = (state, action) => {
  console.log(action);

  if(action.type === "INC"){
    return state +1;
  }
  if (action.type === "DEC") {
    return state -1;
    
  }
  console.log(state);
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>State {state}</h2>
      <input
        type="button"
        style={{ width: "200px", padding: "10px 0px" }}
        value="Increment"
        onClick={() => dispatch({ type: "INC" })}
      />
      <br />
      <br />
      <input
        type="button"
        style={{ width: "200px", padding: "10px 0px" }}
        value="Decrement"
        onClick={() => dispatch({ type: "DEC" })}

      />
    </div>
  );
}

export default App;
