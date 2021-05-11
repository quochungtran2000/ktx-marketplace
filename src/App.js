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
import NotFound from './page/NotFound';
import PostDetail from './page/PostDetail';
import Post from './page/Post';

const getPage = (props) => {
  return (
    <Switch>
      <Route exact path="/communicate">
        <Communicate />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/post/:slug">
        <PostDetail />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
      <Route path="*">
        <NotFound />
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
