import React from "react";
import { Link, useRoutes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const App = () => {

  // const foo = (p) => {
  //   let a = p
  //   // code....
  //   // code....
  //   // code....
  //   return {raducer, laylo, count, };
  // };

  // const b = foo({
  //   name: "counter",
  //   initialState: {
  //     value: 1,
  //   },
  //   reducers: {
  //     laylo: (state) => {
  //       state.value = state.value + 1;
  //     },
  //   },
  // });

  // console.log(b);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ])}
    </>
  );
};

export default React.memo(App);
