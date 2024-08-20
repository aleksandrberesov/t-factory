import React from "react";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
      <Helmet>        
      <h1>JavaScript-библиотеку в ReactJS?</h1>
     
      </Helmet>
      <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img
          className="col-span-2 row-span-3 animate-spin m-auto"
          style={{ animationDuration: "30s" }}
          src={logo}
          alt="React Logo"
          width="300"
        />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
      </div>

      <h1 className="text-2xl lg:text-5xl mb-10 text-right">
        Welcome to Your New React App{" "}
        <span className="block text-lg text-blue-400">on DigitalOcean</span>
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Button
          text="Buy"
          url="https://google.com"
        />
        <Button
          text="Sell"
          url="https://example.com"
        />
      </div>
    </div>
  );
}

function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-purple-400 hover:bg-purple-300 text-purple-800 hover:text-purple-900 block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}