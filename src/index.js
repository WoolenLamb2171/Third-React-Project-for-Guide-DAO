import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop.js";

function App() {
  const [status, setStatus] = useState(false);
  function handleLogInClick() {
    setStatus(true);
  }
  function handleLogOutClick() {
    setStatus(false);
  }
  return (
    <>
      <div className="ui-container">
        {!status && (
          <>
            <h2 className="ui-title">Нужно залогиниться!</h2>
            <button className="ui-button" onClick={handleLogInClick}>
              Войти
            </button>
          </>
        )}
        {status && (
          <>
            <Shop />
            <button className="ui-button" onClick={handleLogOutClick}>
              Выйти
            </button>
          </>
        )}
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
