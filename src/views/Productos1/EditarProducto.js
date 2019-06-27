import React, { Component } from "react";
import { Col, Row, CardTitle, Card, CardBody, Container } from "reactstrap";
import Formulario from "./Formulario";
import { Query } from "react-apollo";
import { PRODUCTO_QUERY } from "../../graphql/queries";

class EditarProducto extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12} xs={12}>
            <Card>
              <CardBody>
                <Row className="mt-3 mr-1">
                  <Col md="5" className="mb-0">
                    <CardTitle className="mb-0">Editar Producto</CardTitle>
                    {/* <div className="small text-muted">
                      Registros encontrados:
                    </div> */}
                  </Col>
                </Row>

                <Query query={PRODUCTO_QUERY} variables={{ id }}>
                  {({ loading, error, data, refetch }) => {
                    if (loading) return "Cargando... <Spinner />;";
                    if (error) return `Error!: ${error.message}`;
                    const { producto } = data;
                    console.log(id);
                    console.log(data);
                    return (
                      <Container style={{ with: "100%" }}>
                        <h2>Producto: {producto.clave}</h2>
                        <Formulario />
                      </Container>
                    );
                  }}
                </Query>
                {/* <Formulario cliente={cliente} refetch={refetch} /> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default EditarProducto;
