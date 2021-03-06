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
  TableFooter,
  TablePagination,
} from "@mui/material";
import { users } from "data/user";
import { StyledTableCell, StyledTableRow } from "../../components";
import { ITransaction } from "types";
// import { useUserStore } from "state";

export const TransactionHistory = () => {
  // const { state: user } = useUserStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [transactions, setTransactions] = useState([
    {} as ITransaction
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setTransactions(users[0].transactions.reverse());
      // setTransactions(user.transactions.reverse());
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
            <h2>Transaction History</h2>
            <Divider />
            <br />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Account Title
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Account Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                    <StyledTableCell align="center">
                      Transaction Type
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      New Balance
                    </StyledTableCell>
                    <StyledTableCell align="center">Date</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <StyledTableRow key={transaction.transactionId}>
                      <StyledTableCell align="center">
                        {transaction.transactionAccountTitle}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.transactionAccountNumber}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        ${" "}
                        {Math.ceil(
                          transaction.transactionAmount
                        ).toLocaleString()}
                      </StyledTableCell>
                      <StyledTableCell
                        transactionType={transaction.transactionType}
                        align="center"
                      >
                        {transaction.transactionType}
                      </StyledTableCell>
                      <StyledTableCell
                        transactionType={transaction.transactionType}
                        align="center"
                      >
                        ${" "}
                        {Math.ceil(
                          transaction.balanceAfterTransaction
                        ).toLocaleString()}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {new Date(transaction.transactionAt).toLocaleString()}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={12}
                      count={transactions.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </Paper>
  );
};
