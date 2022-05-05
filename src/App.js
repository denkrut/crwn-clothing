import React from "react";
import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShopPage from "./components/pages/homepage/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const userSnap = await getDoc(userRef);

        setCurrentUser({
          id: userSnap.id,
          ...userSnap.data(),
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route
              exact
              path="/signin"
              element={
                this.props.currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
