import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { Link } from "react-router-dom";

import { CLIENTES_QUERY } from "../../graphql/queries";
import { ELIMINAR_USUARIO } from "../../graphql/mutations";

import Tabla from "./Tabla";
import Toolbar from "../../components/Util/Toolbar";
import Paginador from "../../components/Util/Paginador";
class Clientes extends Component {
  state = {
    paginador: {
      offset: 0,
      actual: 1
    },
    filter: {
      dropdownOpen: false,
      radioSelected: 1,
      value: 10
    }
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.filter.dropdownOpen
    });
  };

  onRadioBtnClick = (radioSelected, value) => {
    this.setState({
      filter: {
        radioSelected: radioSelected,
        value: value
      }
    });
  };

  paginaAnt = () => {
    console.log("pagina Anteror");
    this.setState({
      paginador: {
        offset: this.state.paginador.offset - this.state.filter.value,
        actual: this.state.paginador.actual - 1
      }
    });
  };

  paginaSig = () => {
    console.log("pagina Siguiente");
    this.setState({
      paginador: {
        offset: this.state.paginador.offset + this.state.filter.value,
        actual: this.state.paginador.actual + 1
      }
    });
  };
  render() {
    return (
      <Query
        query={CLIENTES_QUERY}
        pollInterval={500}
        variables={{ limite: this.state.filter.value, offset: this.state.paginador.offset }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return `Cargando.... <Spinner />`;
          if (error) return console.log(`Error: ${error.message}`);
          console.log(data);

          const { list, total } = data;
          const _total = Number(total);

          return (
            <div className="animated fadeIn">
              <Row>
                <Col lg={12} xs={12}>
                  <Card>
                    <CardBody>
                      <Toolbar
                        title={"Listado de Clientes"}
                        total={_total}
                        toogle={this.toggle}
                        onRadioBtnClick={this.onRadioBtnClick}
                        active={this.state.filter}
                      /> 
                      <Tabla source={list} query={ELIMINAR_USUARIO} />
                      {/* <Paginador total={Number(total)} /> */}
                      <Paginador
                        actual={this.state.paginador.actual}
                        total={_total}
                        limite={this.state.filter.value}
                        paginaAnterior={this.paginaAnt}
                        paginaSiguiente={this.paginaSig}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Clientes;
