import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { LoadingProvider } from "./contexts/loadingContext";

ReactDOM.render(
  <React.StrictMode>
    <Router
      onUpdate={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <UserProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </UserProvider>
      <ToastContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
