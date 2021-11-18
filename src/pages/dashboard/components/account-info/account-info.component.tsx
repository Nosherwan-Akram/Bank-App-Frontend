import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  CircularProgress,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { users } from "data/user";

export const AccountInfo = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    balance: 0,
    accountNumber: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setUser({
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        balance: users[0].balance,
        accountNumber: users[0].accountNumber,
      });
    }, 1000);
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
          <>
            <h2>Account Info</h2>
            <Divider />
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Typography variant="h6">Account Title</Typography>
                {user.firstName + " " + user.lastName}
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Account Number</Typography>
                {user.accountNumber}
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Account Balance</Typography>
                {user.balance}
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Paper>
  );
};
