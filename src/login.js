import React from "react";
import { withRouter } from "react-router";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from "@azure/msal-react";

import { Navbar, Dropdown, DropdownButton, Card } from "react-bootstrap";

import { loginRequest } from "./authConfig";

import Button from "react-bootstrap/esm/Button";

const NavigationBar = () => {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => console.log(error));
  };

  return (
    <>
      <UnauthenticatedTemplate>
        <Button
          variant="secondary"
          className="ml-auto"
          drop="left"
          title="Sign In"
          className="app-color"
          style={{ width: "200px", fontSize: "20px" }}
          onClick={() => instance.loginRedirect(loginRequest)}
        >
          Sign in
        </Button>
      </UnauthenticatedTemplate>
    </>
  );
};

export const Login = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      {/* <Navbar bg="primary" variant="dark">
        <div style={{ margin: "10px", display: "flex" }}>
          <a className="navbar-brand" href="/">
            Mingler
          </a>
        </div>
      </Navbar>
      <br /> */}
      <h3
        style={{
          marginTop: "15vh",
          marginLeft: "12vw",
          fontWeight: "550"
        }}
      >
        <center id="title">Welcome to the Mingler App!</center>
      </h3>
      <h4 style={{ marginLeft: "14%", color: "12b38d", marginTop: "2%" }}>
        Sharing is how we grow
      </h4>
      <Card
        style={{
          marginTop: "5vh",
          marginLeft: "15vw",
          width: "70vw",
          fontWeight: "500"
          // border: "none",
          // backgroundColor: "rgb(243, 243, 241)"
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            fontSize: "20px"
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "23px" }}>About Us</Card.Title>
            <Card.Text>
              <div style={{ width: "30vw", marginTop: "2vw" }}>
                <div style={{ textAlign: "justify" }}>
                  Whether you are new to the city or new to Microsoft, Mingler
                  is the go-to app for you! We help connect Microsoft employees
                  living in the same city. Everyone needs help when they are
                  starting out, so why not pay it forward with Mingler! Get help
                  from colleagues and make new friends.
                </div>
                <br />
                <br />
                Questions about where to live? We got you!
                <br />
                Questions about where to eat? We got you there too!
                <br />
                Join Mingler by signing in with your Microsoft credentials.
              </div>
            </Card.Text>
          </div>
          <div
            style={{
              height: "360px",
              borderLeft: "1px dotted #414242",
              marginLeft: "5vw",
              marginRight: "5vw"
            }}
          />
          <div>
            <h6
              style={{
                fontSize: "20px",
                marginTop: "35%",
                marginBottom: "5vh"
              }}
            >
              Sign in with your Microsoft credentials
            </h6>
            <NavigationBar />
          </div>
        </Card.Body>
      </Card>

      <br />
      {props.children}
      <br />
    </div>
  );
};

export const IdTokenClaims = (props) => {
  return (
    <div id="token-div">
      <p>
        <strong>Audience: </strong> {props.idTokenClaims.aud}
      </p>
      <p>
        <strong>Issuer: </strong> {props.idTokenClaims.iss}
      </p>
      <p>
        <strong>OID: </strong> {props.idTokenClaims.oid}
      </p>
      <p>
        <strong>UPN: </strong> {props.idTokenClaims.preferred_username}
      </p>
    </div>
  );
};

export default withRouter(Login);
