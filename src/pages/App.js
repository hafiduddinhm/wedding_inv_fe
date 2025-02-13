import React from 'react';
import {Analytics} from '@vercel/analytics/react';

import moment from 'moment';
import 'moment/locale/id';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import IrfanYayuk from './irfan_yayuk/components/IrfanYayuk';
import ElmaHendra from './elma_hendra/components/ElmaHendra';
import OzieLusi from './ozie_lusi/components/OzieLusi';
import RikaLilik from './rika_lilik/components/RikaLilik';
import BambangEndah1 from './bambang_endah_1/components/BambangEndah';
import BambangEndah2 from './bambang_endah_2/components/BambangEndah';
import AjayUwin from './ajay_uwin/components/AjayUwin';
import PutriIpan from './putri_ipan/components/PutriIpan';
import AnitaHusni from './anita_husni/components/AnitaHusni';
import RomiRosyi from './romi_rosyi/components/RomiRosyi';
import JohandoWindi from './johando_windi/components/JohandoWindi';
import Ivy5 from './ivy5/components/ivy5';
import RisaAldi from './risa_aldi/components/RisaAldi';
import FathiaHafidz from './fathia_hafidz/components/FathiaHafidz';

if (window.location.pathname === '/') {
  window.location.replace('https://linktr.ee/menghitunghari');
}

moment.locale('id'); // biar semua moment pake bahasa indonesia

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/irfan_yayuk" component={IrfanYayuk} />
          <Route path="/hendra_elma" component={ElmaHendra} />
          <Route path="/ozie_lusi" component={OzieLusi} />
          <Route path="/rika_lilik" component={RikaLilik} />
          <Route path="/bambang_endah/1" component={BambangEndah1} />
          <Route path="/bambang_endah/2" component={BambangEndah2} />
          <Route path="/ajay_uwin" component={AjayUwin} />
          <Route path="/putri_ipan" component={PutriIpan} />
          <Route path="/anita_husni" component={AnitaHusni} />
          <Route path="/romi_rosyi" component={RomiRosyi} />
          <Route path="/johando_windi" component={JohandoWindi} />
          <Route path="/ivy5" component={Ivy5} />
          <Route path="/risa_aldi" component={RisaAldi} />
          <Route path="/fathia_hafidz" component={FathiaHafidz} />
        </Switch>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

export default App;
