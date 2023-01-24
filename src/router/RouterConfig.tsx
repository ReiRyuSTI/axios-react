import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="test" element={<>about</>} />
      </Routes>
    </BrowserRouter>
  );
};
