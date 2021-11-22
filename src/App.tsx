import React from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { CssBaseline } from "@mui/material";
import Sidebar from "components/sidebar/sidebar.component";
import { TransactionHistory } from "pages/transaction-history/transaction-history.page";
import { Bills } from "pages/bills/bills.page";
import Dashboard from "pages/dashboard/dashboard.page";
import { Transfer } from "transfer/transfer.page";
// import { UserProvider } from "state";
// import { Transaction } from "pages/transaction/transaction.page";

function App() {
  return (
    <React.Fragment>
      {/* <UserProvider> */}
        <CssBaseline />
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="transfer" element={<Transfer />}></Route>
                {/* <Route
                  path="transfer/:accountNumber"
                  element={<Transaction />}
                ></Route> */}
                <Route path="history" element={<TransactionHistory />}></Route>
                <Route path="bills" element={<Bills />}></Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
              </Route>
            </Routes>
          </Sidebar>
        </Router>
      {/* </UserProvider> */}
    </React.Fragment>
  );
}

export default App;
