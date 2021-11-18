import React from "react";
import { Route } from "react-router";

import Coursel from "../component/Coursel"
import Navbar from "../component/Navbar"

const publicRoute = ({ component: Component, ...rest }) => {
  return (
    <>
    <section id="container">
 <Navbar></Navbar>
 <section id="main-content">
   <Coursel></Coursel>

    <Route
      {...rest}
      render={matchProps => (
            <Component {...matchProps} props={rest} />
      )}
    />
       </section>
      </section>
    </>
  );
};

export default publicRoute;
