import React from 'react';
import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';
import PageTitle from '../../components/Home/PageTitle';
import useScript from '../../hooks/useScript';
import { Outlet } from 'react-router-dom';


function Home() {
  useScript("/js/main.js");
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Home;