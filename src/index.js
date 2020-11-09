import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router  } from "react-router-dom";
import { createBrowserHistory } from "history";

//import './index.css';
import App from './App';
import BookingPage from "./components/BookingPage";
import Header from "./components/Header";
//import reportWebVitals from './reportWebVitals';

 import "bootstrap/dist/css/bootstrap.css";
 import "./styles.css";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <Router history={history}>
    <Header />
    <main>
      <Switch>
        <Route path="/booking-page/:movieId">
          <BookingPage />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </main>
    <footer className="footer">Copyright @ 2020 Book My Show</footer>
  </Router>
</React.StrictMode>,
rootElement
);


/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
