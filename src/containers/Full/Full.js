import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Breadcrumb from "../../components/Breadcrumb/";
import Aside from "../../components/Aside/";
import Footer from "../../components/Footer/";

//Views
import Dashboard from "../../views/Dashboard/";
import Clientes from "../../views/Clientes/";

import Productos2 from "../../views/Productos1/";
import EditarProducto2 from "../../views/Productos1/EditarProducto";

import Productos from "../../views/Productos/";
import EditarProducto from "../../views/Productos/EditarProducto";

import GridsPage from "../../views/Grids/"
class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/clientes" exact name="Clientes" component={Clientes} />
                {/* <Route path="/clientes/editar/:id" exact name="Editar Cliente" component={EditarCliente} /> */}
                <Route path="/2productos" exact name="Productos" component={Productos2} />
                {/* <Route exact path="/productos/nuevo" component={NuevoProducto} /> */}
                <Route path="/2productos/editar/:id" exact  component={EditarProducto2} />

                <Route path="/productos" exact name="Productos" component={Productos} />
                <Route path="/productos/editar/:id" exact  component={EditarProducto} />

                <Route path="/grids" exact name="Grids" component={GridsPage} />

                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
