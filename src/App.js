import React from 'react'
import './App.css';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from "react-router-dom";
import Communicate from './page/Communicate';
import Home from './page/Home';
import Contact from './page/Contact';
import News from './page/News';

const getPage = (props) => {
  return (
    <Switch>
      <Route path="/communicate">
        <Communicate />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

function App() {

  return (
    <>
      {getPage()}
    </>
    );
}



export default App;
