import React from 'react';
import './App.css';
import Header from './component/AppBar/Header';
import Home from './component/Home/Home';
import NotFound from './NotFound/NotFound.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './component/PostDetails/PostDetails';





function App() {
  return (
    <Router>
      <Header></Header> 
     <Switch>
       <Route path="/home">
      <Home></Home>
       </Route>
       <Route path="/post/:postId">
         <PostDetails></PostDetails>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
    </Router>
    
  );
}

export default App;