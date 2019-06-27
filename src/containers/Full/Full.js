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

import Usuarios from "../../views/Usuarios/";

import Ventas from "../../views/Ventas/";

import Productos from "../../views/Productos1/";
import EditarProducto from "../../views/Productos1/EditarProducto";
import NuevoProducto from "../../views/Productos1/NuevoProducto";


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
                <Route path="/admin/dashboard" name="Dashboard" component={Dashboard} />

                <Route path="/admin/clientes" exact name="Clientes" component={Clientes} />
                {/* <Route path="/clientes/editar/:id" exact name="Editar Cliente" component={EditarCliente} />                     */}
                
                <Route path="/admin/usuarios" exact name="Usuarios" component={Usuarios} />
                
                {/* <Route path="/admin/2productos/editar/:id" exact  component={EditarProducto2} /> 
                <Route path="/admin/2productos" exact name="Productos" component={Productos} />*/}
                <Route path="/admin/productos" exact name="Productos" component={Productos} />  
                <Route path="/admin/productos/editar/:id" exact  component={EditarProducto} />
                <Route path="/admin/productos/nuevo" exact component={NuevoProducto} />

                <Route path="/admin/ventas" exact name="Ventas" component={Ventas} />  

                <Route path="/admin/grids" name="Grids" component={GridsPage} />

                <Redirect from="/admin" to="/admin/dashboard" />
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
