import React from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;

/**
 * jsx의 input 태그의 경우 readOnly라는 attribute를 할당하면
 * input 사용자가 태그 안에 값을 수정하지 못하도록 함
 */
