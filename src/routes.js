import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Footer from './petterns/Footer/Footer';
import Header from './petterns/Header/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
