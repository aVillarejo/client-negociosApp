import React, { Fragment } from "react";
import {
  Col,
  Row,
  Button,
  ButtonToolbar,
  ButtonGroup,
  CardTitle,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

const styles = {
  
}

const Toolbar = props => {
  const { total } = props;
  return (
    <Fragment>
    <p>hola</p>
      
{/* 
      <Row className="mt-3 mr-1 bg-red">
        <Col md="5" className="mb-0 bg-blue">
          <CardTitle className="mb-0">
            <h5>{props.title}</h5>
          </CardTitle>
          <div className="small text-muted">Registros encontrados: {total}</div>
        </Col>
        <Col md="7" className="d-none d-sm-inline-block bg-yellow">
          <Button color="primary" className="float-right">
            <i className="icon-plus" />
            <span className="d-none d-sm-inline-block ml-1"> Añadir</span>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4 ml-2 mr-2 bg-blue">
        <Col sm={{ size: "6", offset: 6 }}>
          <Form action="" method="post" className="form-horizontal">
            <FormGroup row>
              <InputGroup>
                <Input type="text" name="busqueda" placeholder="Nombre" />
                <InputGroupAddon addonType="append">
                  <Button type="button" color="primary">
                    <i className="fa fa-search" />
                    <span className="d-none d-sm-inline-block ml-1">
                      {" "}
                      Buscar
                    </span>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row> */}
    </Fragment>
  );
};

export default Toolbar;
