import React from 'react';
import ReactDOM from 'react-dom';
import './components/propsstate/style.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import CalculatorComponent from './components/propsstate/reactCalculator'


ReactDOM.render(
  <React.StrictMode>
    <CalculatorComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
