import React from "react";
import { Grid } from "@mui/material";
import { AccountInfo } from "./components/account-info";
import { FundsTransfer } from "./components/funds-transfer";
import { TransferGraph } from "./components/transafer-graph";

const Dashboard = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={5}
    >
      <Grid item>
        <AccountInfo />
      </Grid>
      <Grid item>
        <FundsTransfer />
      </Grid>
      <Grid item>
        <TransferGraph />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
