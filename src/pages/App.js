import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './home';
import IrfanYayuk from './irfan_yayuk/IrfanYayuk';

if (window.location.pathname === '/') {
  window.location.replace('https://linktr.ee/menghitunghari');
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/irfan_yayuk" component={IrfanYayuk} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
