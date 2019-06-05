import React from "react";
import { render } from "react-dom";
import "@babel/polyfill";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import LogIn from "./components/Pages/LogIn";
import Account from "./components/Pages/Account";
import SignUp from "./components/Pages/SignUp";
import StartTrip from "./components/Pages/StartTrip";
import MealPref from "./components/Pages/MealPreferences";
import Profile from "./components/Pages/Profile";
import signInButton from "./components/Pages/signInButton";

//import Merge from './components/Home/Merge';

import "./styles/styles.scss";
import ContactUs from "./components/Pages/ContactUs";
import Accomodations from "./components/Pages/Accomodations";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />

        <Route exact path="/Account" component={Account} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/StartTrip" component={StartTrip} />
        <Route path="/mealpref" component={MealPref} />
        <Route path="/Profile" component={Profile} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/signin" component ={signInButton}/>
        <Route path="/accomodations" component ={Accomodations}/>


        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
