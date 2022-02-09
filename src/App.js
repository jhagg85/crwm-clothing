import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/header/header";

import HomePage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
