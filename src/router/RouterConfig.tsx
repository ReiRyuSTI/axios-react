import { AxiosErrorHandler } from "hooks/AxiosConfigHandler";
import { NotFoundPage } from "pages/ErrorPage";
import { HomePage } from "pages/HomePage";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <menu className="absolute right-0 top-0 inline-flex flex-col items-center justify-around w-20 h-40 bg-black text-white">
        <Link to="/" className="">
          home
        </Link>
        <Link to="/about">about</Link>
      </menu>
      <AxiosErrorHandler>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<>about</>} />
          <Route path="404" element={<NotFoundPage />} />
        </Routes>
      </AxiosErrorHandler>
    </BrowserRouter>
  );
};
