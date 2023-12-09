import logo from "./logo.svg";
import "./App.css";
import PersInfo from "./components/PersInfo";
import { useState, useEffect } from "react";
import ShowXY from "./components/ShowXY";

// Use Effect Hook - Web Dev Simplified

function App() {
  const [type, setType] = useState("posts");
  const [item, setItem] = useState([]);
  useEffect(() => {
    console.log(type);
    fetch(`https://jsonplaceholder.typicode.com/todos/1/${type}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [type]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setType("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setType("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setType("comments");
        }}
      >
        comments
      </button>
      <h1>{type}</h1>
      {item.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default App;
