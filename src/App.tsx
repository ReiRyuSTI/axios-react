import React from "react";
import "./App.css";
import { RouterConfig } from "router/RouterConfig";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "utilities/ErrorBoundary";

function App() {
  const data = process.env.ENV_MODE || "envファイルが読み込まれていません";
  console.log(data);

  return (
    <div className="App relative">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <ErrorBoundary> */}
        <header className="flex items-center justify-center w-full h-10 bg-gray-500 text-white">
          {data}
        </header>
        <RouterConfig />
      </ErrorBoundary>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
