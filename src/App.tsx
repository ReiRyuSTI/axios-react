import React from "react";
import "./App.css";
import { RouterConfig } from "router/RouterConfig";

function App() {
  const data = process.env.ENV_MODE || "envファイルが読み込まれていません";
  console.log(data);

  return (
    <div className="App relative">
      <header className="flex items-center justify-center w-full h-10 bg-gray-500 text-white">
        {data}
      </header>
      <RouterConfig />
    </div>
  );
}

export default App;
