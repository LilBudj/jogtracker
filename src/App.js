import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/login/Login";

class App extends React.Component{

  render() {
    return(
        <BrowserRouter>
        <div className={style.appContainer}>
            <Header/>
                <Login/>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
