import React from 'react';
import style from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/login/Login";
import JogContainer from "./components/jogs/JogContainer";
import JogForm from "./components/jog_form/JogForm";

class App extends React.Component{

  render() {
    return(
        <BrowserRouter>
        <div className={style.appContainer}>
            <Header/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/jogs'} render={() => <JogContainer/>}/>
                <Route path={'/form'} render={() => <JogForm/>}/>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
