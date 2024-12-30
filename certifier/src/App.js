import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './pages/login';
import Adminpage from './pages/Adminpage';
import Loader from './components/loader';
import Error from './components/error';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigation,
  Outlet,
} from 'react-router-dom';

// Layout to show loader during navigation

// Loader for the /admin route
const adminLoader = async () => {

  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwMGdT2cAvEmVnBogNGRvBOm9dfd5gQhcowlgGDahyqmntPQ_CIEQ4hjKrnmZW0OOar/exec'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  console.log('Fetched data:', data);
  return data;
};


// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     
      <Route path="/" element={<LoginPage  />} />

      <Route
        path="/admin"
        element={<Adminpage />}
        loader={adminLoader}
      />
        <Route
        path="/error"
        element={<Error />}/>
        {/* <Route index element={<Adminpage />} /> */}
      
    </>
  )
);

// App Component
const App = () =>{

  const [isloading,setisloading]=useState()

return(<RouterProvider router={router} />)
};

export default App;
