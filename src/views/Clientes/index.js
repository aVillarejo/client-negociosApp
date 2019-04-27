import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { Link } from "react-router-dom";

import { CLIENTES_QUERY } from "../../graphql/queries";
import { ELIMINAR_CLIENTE } from "../../graphql/mutations";

import Tabla from "./Tabla";
import Toolbar from "./ToolBar";
import Paginador from "./Paginador";

class Clientes extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      filter: {
        dropdownOpen: false,
        radioSelected: 1,
        value: 10
      }
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.filter.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected, value) {
    this.setState({
      filter: {
        radioSelected: radioSelected,
        value: value
      }
    });
  }
  render() {
    return (
      <Query
        query={CLIENTES_QUERY}
        pollInterval={500}
        variables={{ limite: this.state.filter.value, offset: 0 }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return `Cargando.... <Spinner />`;
          if (error) return `Error: ${error.message}`;
          console.log(data);

          const { list, total } = data;
          const totalClientes = Number(total);

          return (
            <div className="animated fadeIn">
              <Row>
                <Col lg={12} xs={12}>
                  <Card>
                    <CardBody>
                      <Toolbar
                        title={"Listado de Clientes"}
                        total={totalClientes}
                        toogle={this.toggle}
                        onRadioBtnClick={this.onRadioBtnClick}
                        active={this.state.filter}
                      />
                      <Tabla source={list} query={ELIMINAR_CLIENTE} />
                      <Paginador total={Number(total)} />
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
