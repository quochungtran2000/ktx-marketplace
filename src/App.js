import React from "react";
import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useLoading } from "./contexts/loadingContext";
import UpdatePost from "./page/UpdatePost";
import { useUser } from "./contexts/userContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));


function App() {
  const classes = useStyles();
  const { loading } = useLoading();
  const { user } = useUser();
  return (
    <>
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
          {!user ? <Redirect to="/" /> : <CreatePost />}
        </Route>
        <Route exact path="/myaccount">
          {!user ? <Redirect to="/" /> : <MyAccount />}
        </Route>
        <Route exact path="/mypost">
          {!user ? <Redirect to="/" /> : <MyPost />}
        </Route>
        <Route exact path="/update/:slug">
          {!user ? <Redirect to="/" /> : <UpdatePost />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
