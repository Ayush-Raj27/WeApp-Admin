import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Divider, IconButton } from "@mui/material";

import Swal from "sweetalert2";
import "./SideBar.css";
//icons

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import RightIcon from "@mui/icons-material/ChevronRight";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TimelineIcon from "@mui/icons-material/Timeline";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Sidebar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div id="sidebar-main">
      <div
        className="prof-btn"
        style={{
          color: "#E95B3E",
          backgroundColor: "inherit",
          textTransform: "none",
        }}
      >
        <div className="prof-txt">
          <div className="welcome">
            <h2>WeApp </h2>
            <h3>Admin Panel</h3>
          </div>
        </div>
      </div>
      <Divider
        style={{
          backgroundColor: "#E6E6E6 ",
          width: "100%",
          margin: "2px 0px",
        }}
      />
      <Button
        className="nav-dashboard-btn"
        style={{
          color:
            location.pathname == "/custodialWallet" ? "#E95B3E" : "#8997ae",
          backgroundColor:
            location.pathname == "/custodialWallet" ? "#f7f9fd" : "inherit",
          textTransform: "none",
        }}
        onClick={() => {
          history.push("/custodialWallet");
        }}
      >
        <AccountBalanceWalletIcon style={{ flex: 1 }} />
        <div className="dash-name" style={{ flex: 2 }}>
          Custodial Wallet
        </div>
        <RightIcon style={{ flex: 1 }} />
      </Button>

      <Divider
        style={{
          backgroundColor: "#E6E6E6 ",
          width: "100%",
          margin: "2px 0px",
        }}
      />

      <Button
        className="nav-dashboard-btn"
        style={{
          color: location.pathname == "/appSetup" ? "#E95B3E" : "#8997ae",
          backgroundColor:
            location.pathname == "/appSetup" ? "#F7F9FD" : "inherit",
          textTransform: "none",
          display: "flex",
        }}
        onClick={() => {
          history.push("/appSetup");
        }}
      >
        <AddBoxIcon style={{ flex: 1 }} />

        <div className="dash-name" style={{ flex: 2 }}>
          App Setup
        </div>
        <RightIcon style={{ flex: 1 }} />
      </Button>

      <Divider
        style={{
          backgroundColor: "#E6E6E6 ",
          width: "100%",
          margin: "2px 0px",
        }}
      />
      <Button
        className="nav-dashboard-btn"
        style={{
          color: location.pathname == "/analytics" ? "#E95B3E" : "#8997ae",
          backgroundColor:
            location.pathname == "/analytics" ? "#F7F9FD" : "inherit",
          textTransform: "none",
        }}
        onClick={() => {
          history.push("/analytics");
        }}
      >
        <TimelineIcon style={{ flex: 1 }} />
        <div className="dash-name" style={{ flex: 2 }}>
          Analytics
        </div>
        <RightIcon style={{ flex: 1 }} />
      </Button>
      <Divider
        style={{
          backgroundColor: "#E6E6E6 ",
          width: "100%",
          margin: "2px 0px",
        }}
      />

      <Button
        className="nav-dashboard-btn"
        onClick={() => {
          history.push("/walletControl");
        }}
        style={{
          color: location.pathname == "/walletControl" ? "#E95B3E" : "#8997ae",
          backgroundColor:
            location.pathname == "/walletControl" ? "#F7F9FD" : "inherit",
          textTransform: "none",
        }}
      >
        <PauseCircleFilledIcon style={{ flex: 1 }} />
        <div className="dash-name" style={{ flex: 2 }}>
          Wallet Control
        </div>
        <RightIcon style={{ flex: 1 }} />
      </Button>
      <Divider
        style={{
          backgroundColor: "#E6E6E6 ",
          width: "100%",
          margin: "2px 0px",
        }}
      />

      <Button
        className="nav-dashboard-btn"
        style={{
          color: location.pathname == "/admin/queries" ? "#E95B3E" : "#8997ae",
          backgroundColor:
            location.pathname == "/admin/queries" ? "#F7F9FD" : "inherit",
          textTransform: "none",
        }}
        onClick={() => {
          history.push("/");
        }}
      >
        <LogoutIcon style={{ flex: 1 }} />
        <div className="dash-name" style={{ flex: 2 }}>
          Logout
        </div>
        <RightIcon style={{ flex: 1 }} />
      </Button>
    </div>
  );
};

export default Sidebar;
