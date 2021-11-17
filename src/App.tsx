import React from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { CssBaseline } from "@mui/material";
import Sidebar from "components/sidebar/sidebar.component";
import Dashboard from "pages/dashboard/dashboard.page";
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="transfer" element={<h1>transfer</h1>}></Route>
              <Route path="history" element={<h1>history</h1>}></Route>
              <Route path="bills" element={<h1>bills</h1>}></Route>
              <Route path="*" element={<h1>Not Found Here</h1>}></Route>
            </Route>
          </Routes>
        </Sidebar>
      </Router>
    </React.Fragment>
  );
}

export default App;
