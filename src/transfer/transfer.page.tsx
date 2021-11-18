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
  TableFooter,
  TablePagination,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { users } from "../data/user";
import { StyledTableCell, StyledTableRow } from "./transfer.styles";
import { useNavigate } from "react-router-dom";

export const Transfer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const [beneficiaries, setBeneficiaries] = useState([
    {} as {
      accountNumber: string;
      firstName: string;
      lastName: string;
      bankName: string;
    },
  ]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setBeneficiaries(users[0].beneficiaries.reverse());
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
              <h2>Transfer Funds</h2>
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
                  {beneficiaries.map(
                    ({ accountNumber, firstName, lastName, bankName }) => (
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
                            onClick={() => navigate(`/dashboard`)}
                          >
                            Transfer Funds
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  )}
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
                      count={beneficiaries.length}
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
