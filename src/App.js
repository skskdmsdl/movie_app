import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
    // BrowserRouter를 사용하면 url에 #이 안붙지만 github pages에서 정확히 설정하기 귀찮음
    <HashRouter>
      {/* 컴포넌트가 Link를 사용하고 있다면 Router안에 넣어야 함! */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </HashRouter>
  );
}

export default App;