import logo from "./logo.svg";
import "./App.css";
import PersInfo from "./components/PersInfo";
import { useState, useEffect } from "react";

// Creating a Digital Clock
function App() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
     
      setTime(new Date().toLocaleString());
      console.log(time)
    }, 1000);
  });

  return (
    <div className="App">
      <h1>Time is : {time}</h1>
    </div>
  );
}

export default App;
