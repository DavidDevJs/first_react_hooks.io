import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './context/ThemeContext';
//Tailwind
import './assets/index.css';

//js
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value="red">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
