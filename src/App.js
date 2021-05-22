import React, { Suspense, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


import Home from './pages/home';
import Detail from './pages/detail';

import Header from './components/header';
import Footer from './components/footer';

import { initContext, ContextProvider } from './context/context';

const AppContext=()=>{
  const context=initContext({});
  return (
    <ContextProvider initialState={context.state} reducer={context.reducer}>
        <App />
    </ContextProvider>
  )
}

function App(props) {
  return (
    <React.Fragment>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/detail/:ID" component={Detail} />
           </Switch>
          <Footer />
      </Router>
    </React.Fragment>    
  );
}


export default AppContext;
