import React, { Component, useState } from "react";
import { withRouter } from "react-router";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import "../styles.css";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FaMoneyBill,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import {
  RiMoneyDollarBoxLine,
  RiBuilding2Line,
  RiPencilLine
} from "react-icons/ri";
import { BiCog, BiFoodMenu } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

class SideBar extends Component {
  state = {
    menuCollapse: false,
    currentTab: this.props.location.pathname || "/"
  };

  //create a custom function that will change menucollapse state from false to true and true to false
  menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    this.setState((prevState) => ({
      menuCollapse: !prevState.menuCollapse
    }));
  };

  render() {
    var { menuCollapse, currentTab } = this.state;
    console.log("currentTab", currentTab);
    return (
      <div>
        {currentTab !== "/" && (
          <div id="sidebar">
            <ProSidebar
              collapsed={menuCollapse}
              style={{ height: "100vh", color: "white" }}
              className="background-color-nav"
            >
              <SidebarHeader>
                <div className="closemenu" onClick={this.menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  {menuCollapse ? (
                    <FiArrowRightCircle />
                  ) : (
                    <FiArrowLeftCircle />
                  )}
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem
                    active={currentTab === "/" || currentTab === "/home"}
                    icon={<FiHome />}
                  >
                    <a href="./home" style={{ color: "#414242" }}>
                      Home
                    </a>
                  </MenuItem>
                  <MenuItem
                    active={currentTab === "/apt"}
                    icon={<RiBuilding2Line />}
                  >
                    <a href="./apt" style={{ color: "#414242" }}>
                      Apartments
                    </a>
                  </MenuItem>
                  <MenuItem
                    active={currentTab === "/restaurants"}
                    icon={<BiFoodMenu />}
                  >
                    <a href="./restaurants" style={{ color: "#414242" }}>
                      Restaurants
                    </a>
                  </MenuItem>
                  <MenuItem
                    active={currentTab === "/finance"}
                    icon={<RiMoneyDollarBoxLine />}
                  >
                    <a href="./finance" style={{ color: "#414242" }}>
                      Financial Support
                    </a>
                  </MenuItem>
                  <MenuItem icon={<RiPencilLine />}>Random</MenuItem>
                </Menu>
              </SidebarContent>
              <SidebarFooter style={{ marginBottom: "20%" }}>
                <Menu iconShape="square">
                  <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SideBar);
