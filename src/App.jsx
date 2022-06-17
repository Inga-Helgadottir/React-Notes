import { useState } from "react";
import "./App.css";

function App() {
  const [getter, setGetter] = useState([2, 3, 4, 6, 78]);
  const [hi, hihi] = useState(true);

  if (hi) {
    getter.push(55);
    setGetter([...getter, 222]);
    console.log(getter);
    hihi(false);
    console.log(getter);
  }
  return <div className="App"></div>;
}

export default App;
