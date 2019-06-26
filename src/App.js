import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/home.js'
import Login from './components/login/login'
import SearchBarExample from './containers/SearchContainer' 
// ant-ui　try
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div>
      <div className="App">
        <SearchBarExample></SearchBarExample>
        
      </div>
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/home" component={Home} />
              <Route path="/login" component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
