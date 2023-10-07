import React from "react";
import { Analytics } from "@vercel/analytics/react";
// let me try
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IrfanYayuk from "./irfan_yayuk/components/IrfanYayuk";
import ElmaHendra from "./elma_hendra/components/ElmaHendra";
import OzieLusi from "./ozie_lusi/components/OzieLusi";
import RikaLilik from "./rika_lilik/components/RikaLilik";
import BambangEndah1 from "./bambang_endah_1/components/BambangEndah";
import BambangEndah2 from "./bambang_endah_2/components/BambangEndah";
import AjayUwin from "./ajay_uwin/components/AjayUwin";
import PutriIpan from "./putri_ipan/components/PutriIpan";

if (window.location.pathname === "/") {
  window.location.replace("https://linktr.ee/menghitunghari");
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
          <Route path="/bambang_endah/1" component={BambangEndah1} />
          <Route path="/bambang_endah/2" component={BambangEndah2} />
          <Route path="/ajay_uwin" component={AjayUwin} />
          <Route path="/putri_ipan" component={PutriIpan} />
        </Switch>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

export default App;
