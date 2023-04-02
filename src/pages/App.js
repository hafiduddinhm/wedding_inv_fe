import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './home';
import IrfanYayuk from './irfan_yayuk/IrfanYayuk';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IrfanYayuk} />
        <Route path="/irfan_yayuk" component={IrfanYayuk} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
