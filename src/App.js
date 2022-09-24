import NavBar from "./components/NavBar";
import "./styles.css";
import React, { useState } from "react";
import { Switch, Route, Redirect, useEffect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./login";
import SideBar from "./components/SideBar";
import FinancialSupport from "./components/FinancialSupport";
import {
  AuthenticatedTemplate,
  MsalProvider,
  useMsal
} from "@azure/msal-react";
import { IdTokenClaims } from "./login.js";
import Button from "react-bootstrap/esm/Button";
import Apartments from "./components/Apartments";
import Restaurants from "./components/Restaurants";

const IdTokenContent = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { accounts } = useMsal();
  const [idTokenClaims, setIdTokenClaims] = useState(null);

  function GetIdTokenClaims() {
    setIdTokenClaims(accounts[0].idTokenClaims);
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {idTokenClaims ? (
        <IdTokenClaims idTokenClaims={idTokenClaims} />
      ) : (
        <Button variant="secondary" onClick={GetIdTokenClaims}>
          View ID Token Claims
        </Button>
      )}
    </>
  );
};

export default function App({ msalInstance }) {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <AuthenticatedTemplate>
          <IdTokenContent />
        </AuthenticatedTemplate>
        <NavBar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/finance" component={FinancialSupport} />
            <Route exact path="/apt" component={Apartments} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/" component={Login} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </MsalProvider>
  );
}
