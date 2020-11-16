import React from "react";
import Mainpage from "./components/Mainpage/Mainpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Mainpage/Signup/Singup";
import Signin from "./components/Mainpage/Signin/Signin";
import NotFound from "./components/Mainpage/NotFound/NotFound";
import Cita from "./components/Mainpage/Cita/Cita";
import AdminDashboard from "./components/Mainpage/AdminDashboard/AdminDashboard";
import AdminRoute from "./components/Mainpage/AdminRoute/AdminRoute";
import UserRoute from "./components/Mainpage/UserRoute/UserRoute";
import Navbar from "./components/Mainpage/NavbarSection/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Banner /> */}
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <UserRoute exact path="/user/cita" component={Cita} />
            <AdminRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
