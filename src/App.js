import React from "react";
import { ToastContainer } from "react-toastify";
import WeatherContainer from "./modules/container/WeatherContainer";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <WeatherContainer />
    </div>
  );
}

export default App;
