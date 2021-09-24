import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import Detail from './Detail.js';
import './Blank.css';


function App() {
  return (

    <>
    <NavBar></NavBar>

    <Route exact path='/'>
      <MainPage></MainPage>
    </Route>
    
    <Route exact path='/detail'>
      <Detail></Detail>
    </Route>

    </>
  );
}


export default App;
