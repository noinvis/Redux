import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from './pages/layout/Layout'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/not-found/Notfound'

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/edit/:id", element: <EditUser />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default React.memo(App);
