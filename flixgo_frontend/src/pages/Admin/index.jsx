import React from 'react';
import Header from '../../components/Admin/Header';
import useScript from '../../hooks/useScript';
import Sidebar from '../../components/Admin/Sidebar';
import Movies from './Movies';
import Dashboard from './Dashboard';
import Users from './Users';
import Reviews from './Reviews';
import { Routes, Route, Outlet } from 'react-router-dom';

function Admin() {
  useScript("/js/admin.js")

  return (
    <div id='adminFlixGo'>
      <Header />
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default Admin;