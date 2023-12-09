import logo from "./logo.svg";
import "./App.css";
import PersInfo from "./components/PersInfo";
import { useState, useEffect } from "react";

// Conditional Rerendering

let gCnt = 0;
function App() {
  const [Obj, setObj] = useState({
    cnt: 10,
    flag: true,
  });
  useEffect(() => {
    console.log("Exection called ", gCnt++);
  }, [Obj.cnt]);

  return (
    <div className="App">
      <h1>
        {Obj.cnt}-{Obj.flag.toString()}
      </h1>
      <button
        onClick={() => {
          setObj({ ...Obj, cnt: Obj.cnt + 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setObj({ ...Obj, cnt: Obj.cnt - 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setObj({ ...Obj, flag: !Obj.flag });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
