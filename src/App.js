import logo from "./logo.svg";
import "./App.css";
import PersInfo from "./components/PersInfo";
import { useState } from "react";

function App() {
  const [Obj, setObj] = useState({
    count: 10,
    bool: true,
  });
  return (
    <div className="App">
      <h1>Counter : {Obj.count}</h1>
      <button onClick={() => setObj({ ...Obj, count: Obj.count + 1 })}>
        Increment
      </button>
      <button onClick={() => setObj({ ...Obj, count: Obj.count - 1 })}>
        Decrement
      </button>
      <h1>{Obj.bool.toString()}</h1>
      {/* <h1>{JSON.stringify(Obj)}</h1> */}
      <button
        onClick={() => {
          setObj({ ...Obj, bool: !Obj.bool });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
