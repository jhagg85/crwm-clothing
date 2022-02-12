import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

import Header from "./Components/header/header";
import HomePage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
