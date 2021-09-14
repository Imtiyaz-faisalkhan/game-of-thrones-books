import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store';
import { Provider } from "react-redux";
import App from './App';
import './App.css'



const s = store();

s.subscribe(() => {
  localStorage.setItem("Books", JSON.stringify(s.getState()));

});

const render = (
  <Provider store={s}>
    <App/>
  </Provider>
);

ReactDOM.render(render, document.getElementById("root"));

