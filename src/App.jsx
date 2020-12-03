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
import UserDashboard from "./components/Mainpage/UserDashboard/UserDashboard";
import CitasAceptadasDashboard from "./components/Mainpage/AdminDashboard/CitasAceptadasDashboard";
import PacientesDashboard from "./components/Mainpage/AdminDashboard/PacientesDashboard";

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
            <UserRoute exact path="/user/dashboard" component={UserDashboard} />
            <AdminRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
            />

            <AdminRoute
              exact
              path="/admin/aceptados"
              component={CitasAceptadasDashboard}
            />

            <AdminRoute
              exact
              path="/admin/pacientes"
              component={PacientesDashboard}
            />

            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
