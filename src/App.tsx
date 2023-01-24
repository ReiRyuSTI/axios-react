import React from "react";
import "./App.css";
import { RouterConfig } from "router/RouterConfig";

function App() {
  const data = process.env.ENV_MODE || "envファイルが読み込まれていません";
  console.log(data);

  return (
    <div className="App">
      {data}
      <header className="App-header">
        <p className="text-red-500">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link test"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RouterConfig />
    </div>
  );
}

export default App;
