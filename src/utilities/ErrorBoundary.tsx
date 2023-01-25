import React from "react";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error }: FallbackProps) {
  console.log(error);

  return (
    <div>
      <h2>component のエラーは取得できるで</h2>
      <pre>{error.message}</pre>
    </div>
  );
}
export default ErrorFallback;
