import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebase } from '../firebase';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import PasswordChangePage from './PasswordChange';
import AdminPage from './AdminPage';
import withAuthentication from './withAuthentication';

import * as routes from '../constants/routes';
import styles from './App.scss';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navigation />
        <hr />
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.PASSWORD_CHANGE} component={() => <PasswordChangePage />} />
        <Route exact path={routes.ADMIN} component={() => <AdminPage />} />
      </div>
    </Router>
  );
}

// class App extends Component {
//   state = {
//     authUser: null,
//   };
//
//   componentDidMount() {
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//       ? this.setState(() => ({ authUser }))
//       : this.setState(() => ({ authUser: null }));
//     });
//   }
//
//   render() {
//     return (
//
//     );
//   }
// }

export default withAuthentication(App);
