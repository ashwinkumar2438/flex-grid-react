import React from 'react';
import ReactDOM from 'react-dom';
import './scss/base.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import SlideBar from './web_components/Slidebar';

if (!customElements.get("slide-bar")) {
  customElements.define("slide-bar", SlideBar);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
