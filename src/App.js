import React from 'react';
import logo from './logo.svg';
import './App.css';
import Msgitem from './components/Msgitem';
import Remdlist from './components/Remdlist';


// ant-ui　try
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
      <Msgitem title="倪志强" description="描述"/>
      <Msgitem title="倪志强" description="描述"/>
      <Msgitem title="倪志强" description="描述"/>
      <Remdlist/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
