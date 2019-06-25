import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBarExample from './containers/SearchContainer' 
// ant-ui　try
import {
  Button
} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
      <SearchBarExample></SearchBarExample>
      {/* <Button>Ant UI Try</Button>
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
      </header> */}
    </div>
  );
}

export default App;