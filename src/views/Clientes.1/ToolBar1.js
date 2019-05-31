import React, { Component } from "react";
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
    <Row>
      <Col lg="5" md="6" sm="12" className="mb-3">
        <CardTitle className="mb-0">{props.title}</CardTitle>
        <div className="small text-muted">Registros encontrados: {total} </div>
      </Col>
      <Col lg="7" md="6" className="d-none d-sm-inline-block">
        <Col md="auto">
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
        <Col md="12">
          <Form action="" method="post" className="form-horizontal">
            <FormGroup row>
              <InputGroup>
                <Input
                  type="email"
                  id="input2-group2"
                  name="input2-group2"
                  placeholder="Email"
                />
                <InputGroupAddon addonType="append">
                  <Button type="button" color="primary">
                    <i className="fa fa-search" /> Search
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

export default Toolbar;
