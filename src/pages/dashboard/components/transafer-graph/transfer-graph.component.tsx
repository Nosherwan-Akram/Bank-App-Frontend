import React, { useState, useEffect } from "react";
import { Paper, Box, Grid, CircularProgress } from "@mui/material";
import { users } from "data/user";
import Chart from "react-apexcharts";
import { ITransaction } from "types";
// import { useUserStore } from "state";

export const TransferGraph = () => {
  // const { state: user } = useUserStore();
  const [transactions, setTransactions] = useState<ITransaction[]>([
    {} as ITransaction,
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setTransactions(users[0].transactions);
      // setTransactions(user.transactions);
    }, 1200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Paper elevation={3} variant="elevation">
      <Box p={3}>
        {loading && (
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
        {!loading && (
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
                categories: transactions
                  .slice(0, 15)
                  .map(({ transactionAt }) =>
                    new Date(transactionAt).toLocaleString()
                  ),
              },
            }}
            series={[
              {
                name: "Balance",
                data: transactions
                  .slice(0, 15)
                  .map(({ balanceAfterTransaction }) =>
                    Math.ceil(balanceAfterTransaction)
                  ),
              },
            ]}
          />
        )}
      </Box>
    </Paper>
  );
};
