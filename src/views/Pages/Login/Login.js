import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardFooter,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormGroup,
  Label,
  FormText,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";

import "./style.css";
import "./css/style.css";
import loginlogo from "./images/login_logo.png";
import bg from "./images/bg.jpg";
import { runInThisContext } from "vm";

import { LOGIN_QUERY } from "../../../graphql/queries";

class Login extends Component {
  state = {
    usuario:"",
    password: "",
  };

  // validateEmail = e => {
  //   const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   const { validate } = this.state;
  //   if (emailRex.test(e.target.value)) {
  //     validate.emailState = "has-success";
  //   } else {
  //     validate.emailState = "has-danger";
  //   }
  //   this.setState({ validate });
  // };

  handleChange = async event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();

  };

  render() {
    const { usuario, password } = this.state;
    return (
      // <div className="app justify-content-center ">
      <div
        className="app fondo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container>
          <div className="sub-main-w3">
            <div className="bg-content-w3pvt">
              <div className="top-content-style">
                <img src={loginlogo} alt="" style={{ maxWidth: "35%" }} />
              </div>
              <form onSubmit={this.submitForm} method="post">
                <p className="legend">Iniciar Sesion</p>

                <FormGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon className="bg-red" addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    
                    <Input
                      type="text"
                      placeholder="Usuario"
                      name="usuario"
                      value={usuario}
                      // valid={this.state.validate.emailState === "has-success"}
                      // invalid={this.state.validate.emailState === "has-danger"}
                      onChange={e => {
                        // this.validateEmail(e);
                        this.handleChange(e);
                      }}
                    />


                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon className="bg-red" addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      // valid={this.state.validate.emailState === "has-success"}
                      // invalid={this.state.validate.emailState === "has-danger"}
                      onChange={e => {
                        // this.validateEmail(e);
                        this.handleChange(e);
                      }}
                    />

                  </InputGroup>
                  <FormText className=" d-flex flex-row-reverse ">
                    <Link to={`/admin`}>
                      <span>Olvide mi contraseña</span>
                    </Link>
                  </FormText>
                </FormGroup>
                {/* 
                <FormGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon className="bg-red" addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="exampleEmail"
                      type="email"
                      placeholder="Usuario"
                      //required
                      value={email}
                      valid={this.state.validate.emailState === "has-success"}
                      invalid={this.state.validate.emailState === "has-danger"}
                      onChange={e => {
                        this.validateEmail(e);
                        this.handleChange(e);
                      }}
                    />
                    <FormFeedback invalid="true">
                      That's a tasty looking email you've got there.
                    </FormFeedback>
                    <FormFeedback invalid="true">
                      Uh oh! Looks like there is an issue with your email.
                      Please input a correct email.
                    </FormFeedback>
                    <FormText>
                      Your username is most likely your email.
                    </FormText>
                  </InputGroup>
                </FormGroup> */}

                {/* <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    id="examplePassword"
                    value={password}
                    onChange={e => this.handleChange(e)}
                  />
                </InputGroup> */}
                <Row className="mt-5">
                  <Col xs="12">
                    <Button color="primary" className="px-4">
                      <Link to={`/admin`}>
                        <span>Acceder</span>
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </form>
              <a href="#" className="bottom-text-w3ls">
                ¿No tienes cuenta?. ¡Registrate!
              </a>
            </div>
          </div>
        </Container>

        {/* <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4 CardDiv leftCardDiv">
                  <CardBody>
                    <h1>Inicia Sesion</h1>
                    <p className="text-muted">Ingresa a tu cuenta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Usuario" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contraseña" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">
                          Acceder
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Olvide mi contraseña
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="p-1 text-center footerCard">
                    Registrate!!
                  </CardFooter>
                </Card>
                <Card
                  className="rightCardDiv text-white bg-primary py-5 d-md-down-none"
                  style={{ width: 44 + "%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Crear cuenta</h2>
                      <p className="mt-4">
                        ¿No tienes cuenta?, crea una cuenta en tan solo unos
                        pocos pasos.
                      </p>
                      <Button color="primary" className="mt-5" active>
                        Registrame
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

// class Login2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       validate: {
//         emailState: ""
//       }
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   validateEmail(e) {
//     const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const { validate } = this.state;
//     if (emailRex.test(e.target.value)) {
//       validate.emailState = "has-success";
//     } else {
//       validate.emailState = "has-danger";
//     }
//     this.setState({ validate });
//   }

//   handleChange = async event => {
//     // console.log(event.target.name);
//     const { target } = event;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const { name } = target;
//     await this.setState({
//       [name]: value
//     });
//   };

//   submitForm(e) {
//     e.preventDefault();
//     console.log(`Email: ${this.state.email}`);
//   }

//   render() {
//     const { email, password } = this.state;
//     return (
//       <Container className="Container">
//         <h2>Sign In</h2>
//         <Form className="form" onSubmit={e => this.submitForm(e)}>
//           <Col>
//             <FormGroup>
//               <Label>Username</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="exampleEmail"
//                 placeholder="myemail@email.com"
//                 value={email}
//                 valid={this.state.validate.emailState === "has-success"}
//                 invalid={this.state.validate.emailState === "has-danger"}
//                 onChange={e => {
//                   this.validateEmail(e);
//                   this.handleChange(e);
//                 }}
//               />
//               <FormFeedback valid>
//                 That's a tasty looking email you've got there.
//               </FormFeedback>
//               <FormFeedback>
//                 Uh oh! Looks like there is an issue with your email. Please
//                 input a correct email.
//               </FormFeedback>
//               <FormText>Your username is most likely your email.</FormText>
//             </FormGroup>
//           </Col>
//           <Col>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="examplePassword"
//                 placeholder="********"
//                 value={password}
//                 onChange={e => this.handleChange(e)}
//               />
//             </FormGroup>
//           </Col>
//           <Button>Submit</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

export default Login;
