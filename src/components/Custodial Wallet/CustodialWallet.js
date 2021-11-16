import React, { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import { Button, Divider, IconButton } from "@mui/material";
import CustomizedTables from "./table";
import "./CustodialWallet.css";

const CustodialWallet = () => {
  const [rows, setRows] = useState([]);
  const [displayRows, setDisplayRows] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="custodial-wallet-main">
      <div>
        <Sidebar />
      </div>

      <div className="custodial-wallet-container">
        <h1 className="custodial-wallet-header">Custodial Wallet</h1>

        <div className="custodial-wallet-selector">
          <Button>Balance</Button>
          <Button>Tokens</Button>
          <Button>Live Data</Button>
        </div>

        <CustomizedTables rows={displayRows} loading={loading} />

        <div id="custodial-wallet-add-btn">
          <Button variant="contained" style={{ width: "16rem" }}>
            Add Custom Token
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustodialWallet;
