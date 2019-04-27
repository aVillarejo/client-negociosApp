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

const Toolbar = props => {
  const { total } = props;
  return (
    <Fragment>
      <Row className="mt-3 mr-1">
        <Col md="5" className="mb-0">
          <CardTitle className="mb-0">{props.title}</CardTitle>
          <div className="small text-muted">Registros encontrados: {total}</div>
        </Col>
        <Col md="7" className="d-none d-sm-inline-block">
          <Button color="primary" className="float-right">
            <i className="icon-plus" />
          </Button>

          <ButtonToolbar
            className="float-right"
            aria-label="Toolbar with button groups"
          >
            <ButtonGroup className="mr-3" aria-label="First group">
              <Button
                color="outline-secondary"
                onClick={() => props.onRadioBtnClick(1, 10)}
                active={props.active.radioSelected === 1}
              >
                10
              </Button>
              <Button
                color="outline-secondary"
                onClick={() => props.onRadioBtnClick(2, 20)}
                active={props.active.radioSelected === 2}
              >
                20
              </Button>
              <Button
                color="outline-secondary"
                onClick={() => props.onRadioBtnClick(3, 30)}
                active={props.active.radioSelected === 3}
              >
                30
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row className="mt-4 ml-2 mr-2">
        <Col sm={{ size: "6", offset: 6 }}>
          <Form action="" method="post" className="form-horizontal">
            <FormGroup row>
              <InputGroup>
                <Input type="text" name="busqueda" placeholder="Nombre" />
                <InputGroupAddon addonType="append">
                  <Button type="button" color="primary">
                    <i className="fa fa-search" /> Search
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Toolbar;
