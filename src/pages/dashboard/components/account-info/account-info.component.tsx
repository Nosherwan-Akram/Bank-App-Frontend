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
import { IUser } from "types";
// import { useUserStore } from "state";


export const AccountInfo = () => {
  // const { state: userState } = useUserStore();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setUser({
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        balance: users[0].balance,
        accountNumber: users[0].accountNumber,
        uniqueId:"",
        bankName:"",
        email:"",
        bills:[],
        transactions:[],
        beneficiaries:[]
      });
      // setUser(userState);
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
