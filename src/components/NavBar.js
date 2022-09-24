import React, { Component } from "react";
import { NavDropdown, Image } from "react-bootstrap";
import { BiBell } from "react-icons/bi";
import { withRouter } from "react-router";

class NavBar extends Component {
  state = {
    viewIcons: this.props.location.pathname || "/"
  };

  render() {
    var { viewIcons } = this.state;

    return (
      <nav
        className="navbar-custom"
        style={{
          height: "4em",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ margin: "10px", display: "flex" }}>
            <Image width="75px" height="45px" src="/minglerLogo.png" />
            <a className="navbar-brand" href="/home">
              <h1 style={{ paddingLeft: "10px" }}> Mingler </h1>
            </a>
          </div>
          {viewIcons !== "/" && (
            <div style={{ display: "flex", marginTop: "20px" }}>
              <NavDropdown
                id="nav-notification"
                title={<BiBell />}
                menuVariant="dark"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginRight: "25px"
                }}
                className="nav-notification"
              >
                <NavDropdown.Item active href="#action/3.1">
                  Atlanta
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Redmond</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Miami</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="City"
                menuVariant="dark"
                style={{ fontWeight: "bold", marginRight: "25px" }}
              >
                <NavDropdown.Item active href="#action/3.1">
                  Atlanta
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Redmond</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Miami</NavDropdown.Item>
              </NavDropdown>
              <a
                style={{ marginRight: "25px", fontWeight: "bold" }}
                className="navbar-brand"
                href="#"
              >
                Jaydeep Rotithor
              </a>
            </div>
          )}
        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default withRouter(NavBar);
