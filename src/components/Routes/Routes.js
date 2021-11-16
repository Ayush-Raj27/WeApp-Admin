import React from "react";
import Login from "../Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustodialWallet from "../Custodial Wallet/CustodialWallet";
import AppSetup from "../App Setup/AppSetup";
import WalletControl from "../Wallet Control/WalletControl";
import AnalyticsModule from "../Analytics/Analytics";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/custodialWallet">
          <CustodialWallet />
        </Route>

        <Route exact path="/appSetup">
          <AppSetup />
        </Route>

        <Route exact path="/analytics">
          <AnalyticsModule />
        </Route>

        <Route exact path="/walletControl">
          <WalletControl />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default AllRoutes;
