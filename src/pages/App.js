import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IrfanYayuk from './irfan_yayuk/components/IrfanYayuk';
import ElmaHendra from './elma_hendra/components/ElmaHendra';
// import IrfanYayukImage from './irfan_yayuk/assets/image/11.png';
// import Icon from '../assets/image/icon.png'

if (window.location.pathname === '/') {
  window.location.replace('https://linktr.ee/menghitunghari');
}

const App = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   const metaData = {
  //     title: '',
  //     description: '',
  //     image: '',
  //   };

  //   if (location.pathname === '/irfan_yayuk') {
  //     metaData.title = 'Irfan & Yayuk Wedding';
  //     metaData.description = 'Minggu, 7 Mei 2023';
  //     metaData.image = `${window.location.origin}${IrfanYayukImage}`;
  //   } else if (location.pathname === '/elma_hendra') {
  //     metaData.title = 'Elma & Hendra Wedding';
  //     metaData.description = 'Join us for our wedding celebration!';
  //     metaData.image = 'https://example.com/elma_hendra.jpg';
  //   }

  //   const canonicalUrl = `https://menghitunghari.vercel.app${location.pathname}`;

  //   const helmet = document.getElementsByTagName('head')[0];
  //   const title = helmet.querySelector('title');
  //   const metaDesc = helmet.querySelector('meta[name="description"]');
  //   const metaImage = helmet.querySelector('meta[property="og:image"]');
  //   const canonical = helmet.querySelector('link[rel="canonical"]');

  //   console.log(metaImage)
  //   title.innerText = metaData.title;
  //   metaDesc.setAttribute('content', metaData.description);
  //   metaImage.setAttribute('content', metaData.image);
  //   canonical.setAttribute('href', canonicalUrl);
  // }, [location.pathname]);

  return (
    <>
    {/* <Helmet>
      <title>Menghitung Hari Invitation</title>
      <meta name="description" content="UNDANGAN WEBSITE Berbagi Momen Spesial dengan Mudah, Murah dan Cepat" />
      <meta property="og:image" content={Icon}/>
      <link rel="canonical" href="https://menghitunghari.vercel.app/" />
    </Helmet> */}
    <BrowserRouter>
      <Switch>
        <Route path="/irfan_yayuk" component={IrfanYayuk} />
        <Route path="/hendra_elma" component={ElmaHendra} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;
