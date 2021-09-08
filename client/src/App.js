import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { HomeWrapper as Home } from './pages/home/Home';
import { PostWrapper as Post } from './pages/post/Post';
import NoMatch from './pages/no-match/NoMatch';
import AppContext from './appContext';
// import getWeb3 from './getWeb3';
// import Blog from './contracts/Blog.json';

function App() {
  const [dependencies, setDependencies] = useState({ web3: null, account: null, blog: null, loaded: false });

  /**
   * @description Use effect to load the dependencies needed by the routes to interact with the blockchain
   */
  useEffect(() => {
    // (async function() {
    //   const web3 = await getWeb3();

    //   const networkId = await web3.eth.net.getId();
    //   const networkData = Blog.networks[networkId];
    //   const blog = new web3.eth.Contract(Blog.abi, networkData.address);

    //   const [account] = await web3.eth.getAccounts();

    //   setDependencies(previousState => ({ ...previousState, web3, account, blog, loaded: true }));
    // })();
    // HACK: used to render app
    setDependencies(previousState => ({ ...previousState, account: 'mock-account', loaded: true }));
  }, []);

  /**
   * @description Abstraction for connecting user to application;
   * this is shown to the user if they are not initially connected
   * on load
   */
  async function connect() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const { web3 } = dependencies;
    const [account] = await web3.eth.getAccounts();
    setDependencies(previousState => ({...previousState, account}));
  }

  return (
    <Router>
      <AppContext.Provider value={{ dependencies }}>
        {
          dependencies.loaded ?
          (
            dependencies.account ?
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
              </Switch> :
              <Button onClick={connect}>Connect</Button>
          ) : 
          <div>loading....</div>
        }
      </AppContext.Provider>
    </Router>
  );
}

export default App;
