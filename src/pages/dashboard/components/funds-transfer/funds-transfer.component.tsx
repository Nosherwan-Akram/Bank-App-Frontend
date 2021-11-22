import React, { useState, useEffect } from "react";
import {
  Divider,
  Grid,
  CircularProgress,
  Paper,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { users } from "../../../../data/user";
import { StyledTableCell, StyledTableRow } from "./funds-transfer.styles";
import { useNavigate } from "react-router-dom";
import { IBeneficiary } from "types";
// import { useUserStore } from "state";

export const FundsTransfer = () => {
  // const { state: user } = useUserStore();
  const [beneficiaries, setBeneficiaries] = useState<IBeneficiary[]>([
    {} as IBeneficiary,
  ]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setBeneficiaries(users[0].beneficiaries.reverse());
      // setBeneficiaries(user.beneficiaries.reverse());
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
          <>
            <Grid container justifyContent="space-between" alignItems="center">
              <h2>Transfer Funds (Last 3 Beneficiaries)</h2>
              <Button endIcon={<Add />} variant="contained">
                Add Beneficiary
              </Button>
            </Grid>
            <Divider />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Bank</StyledTableCell>
                    <StyledTableCell align="center">
                      Account Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {beneficiaries
                    .slice(0, 3)
                    .map(({ accountNumber, firstName, lastName, bankName }) => (
                      <StyledTableRow key={accountNumber}>
                        <StyledTableCell align="center">
                          {firstName} {lastName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {bankName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {accountNumber}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button
                            variant="outlined"
                            onClick={() =>
                              navigate(`/transfer/${accountNumber}`)
                            }
                          >
                            Transfer Funds
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </Paper>
  );
};
