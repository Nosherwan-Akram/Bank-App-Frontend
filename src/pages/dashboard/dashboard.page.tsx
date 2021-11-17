import React from "react";
import { Grid, Paper } from "@mui/material";
import Chart from "react-apexcharts";
import { AccountInfo } from "./components/account-info";
import { Box } from "@mui/system";
import { users } from "../../data/user";
import { FundsTransfer } from "./components/funds-transfer";

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
        <Paper elevation={3} variant="elevation">
          <Box p={3}>
            <Chart
              height={500}
              options={{
                chart: {
                  type: "line",
                  height: 300,
                  zoom: {
                    enabled: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: "straight",
                },
                title: {
                  text: "Transaction Graph (Last 15)",
                  align: "left",
                },
                xaxis: {
                  categories: users[0].transactions
                    .slice(0, 15)
                    .map(({ transactionAt }) =>
                      new Date(transactionAt).toLocaleString()
                    ),
                },
              }}
              series={[
                {
                  name: "Balance",
                  data: users[0].transactions
                    .slice(0, 15)
                    .map(({ balanceAfterTransaction }) =>
                      Math.ceil(balanceAfterTransaction)
                    ),
                },
              ]}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
