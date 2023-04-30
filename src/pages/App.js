import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IrfanYayuk from './irfan_yayuk/components/IrfanYayuk';
import ElmaHendra from './elma_hendra/components/ElmaHendra';
import OzieLusi from './ozie_lusi/components/OzieLusi'
import RikaLilik from './rika_lilik/components/RikaLilik'

if (window.location.pathname === '/') {
  window.location.replace('https://linktr.ee/menghitunghari');
}

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/irfan_yayuk" component={IrfanYayuk} />
        <Route path="/hendra_elma" component={ElmaHendra} />
        <Route path="/ozie_lusi" component={OzieLusi} />
        <Route path="/rika_lilik" component={RikaLilik} />
      </Switch>
    </BrowserRouter>
    <Analytics />
    </>
  );
};

export default App;
