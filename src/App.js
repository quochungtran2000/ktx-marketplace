import React from "react";
import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from "react-router-dom";
import Communicate from "./page/Communicate";
import Home from "./page/Home";
import Contact from "./page/Contact";
import News from "./page/News";
import NotFound from "./page/NotFound";
import PostDetail from "./page/PostDetail";
import Post from "./page/Post";
import CreatePost from "./page/CreatePost";
import MyAccount from "./page/MyAccount";
import MyPost from "./page/MyPost";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useLoading } from "./contexts/loadingContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

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
      <Route exact path="/createPost">
        <CreatePost />
      </Route>
      <Route exact path="/myaccount">
        <MyAccount />
      </Route>
      <Route exact path="/mypost">
        <MyPost />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

function App() {
  const classes = useStyles();
  const { loading} = useLoading()
  return (
    <>
      {getPage()}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
