import { useState } from "react";
import React from "react";
const App = () => {
    const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typing {text}</p>
    </>
  );
};

export default App;
