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
  Button,
} from "@mui/material";
import { users } from "data/user";
import { StyledTableCell, StyledTableRow } from "../../components";
import { Add } from "@mui/icons-material";
import { Popup } from "./components/popup.component";
import { IBills } from "types";
// import { useUserStore } from "state";

export const Bills = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const { state: user, dispatch } = useUserStore();

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

  const [bills, setBills] = useState([{} as IBills]);
  const [loading, setLoading] = useState(true);

  const payBill = (billToPay: IBills) => {
    // dispatch({
    //   type: "payBill",
    //   payload: {
    //     transactionId: "fd53d0b6-dcba-48a9-a330-79d3adb4fde1",
    //     transactionAmount: billToPay.amount,
    //     transactionAt: new Date(),
    //     transactionType: "debit",
    //     transactionAccountNumber: billToPay.referenceNumber,
    //     transactionAccountTitle: billToPay.billType,
    //     balanceAfterTransaction:
    //       Math.floor(user.balance) - (billToPay.amount || 0),
    //   },
    // });
    console.log(billToPay);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setBills(users[0].bills.reverse());
      // if (user.bills) setBills(user.bills.reverse());
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
            {open && <Popup open={open} onClose={() => setOpen(false)} />}
            <Grid container justifyContent="space-between" alignItems="center">
              <h2>Bills</h2>
              <Button
                endIcon={<Add />}
                variant="contained"
                onClick={() => setOpen(true)}
              >
                Add Bill
              </Button>
            </Grid>
            <Divider />
            <br />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Bill Type</StyledTableCell>
                    <StyledTableCell align="center">
                      Reference Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                    <StyledTableCell align="center">
                      Late Submission Amount
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Due Date</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bills.map((bill) => (
                    <StyledTableRow key={bill.referenceNumber}>
                      <StyledTableCell align="center">
                        {bill.billType}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {bill.referenceNumber}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        $ {Math.ceil(bill.amount).toLocaleString()}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        $ {Math.ceil(bill.amountAfterDueDate).toLocaleString()}
                      </StyledTableCell>
                      <StyledTableCell
                        transactionType={bill.paid ? "credit" : "debit"}
                        align="center"
                      >
                        {bill.paid ? "paid" : "unpaid"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {new Date(bill.dueDate).toLocaleDateString()}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          disabled={bill.paid}
                          variant="contained"
                          fullWidth
                          onClick={() => payBill(bill)}
                        >
                          Pay
                        </Button>
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
                      count={bills.length}
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
