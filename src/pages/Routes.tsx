import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Users from "../components/Users/Users";
import User from "../components/User/User";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </Router>
);

export default AppRoutes;
