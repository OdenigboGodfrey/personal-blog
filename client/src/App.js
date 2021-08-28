import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { HomeWrapper as Home } from './pages/home/Home';
import { PostWrapper as Post } from './pages/post/Post';
import NoMatch from './pages/no-match/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:postIndex">
          <Post/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
