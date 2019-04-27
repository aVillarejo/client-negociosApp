import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Mutation } from "react-apollo";
import { ELIMINAR_PRODUCTO } from "../../graphql/mutations";

class Aviso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.isOpen,
      msg: this.props.msg
        ? this.props.msg
        : "¿Realmente desea realizar esa accion?.",
      title: this.props.title ? this.props.title : "Aviso",

      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false
    };

    this.toggle = this.toggle.bind(this);

    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  render() {
    const { id, query } = this.props;
    return (
      <div className="animated fadeIn">
        {/* <Button onClick={this.toggle}>Launch demo modal</Button> */}
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.handleOpenModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.handleOpenModal}>
            {this.state.title}
          </ModalHeader>
          <ModalBody>{this.state.msg}</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                // console.log(this.props.handleOpenModal(1));
                this.props.handleResModal(1);
                // if (this.confirmar) {
                //   eliminar({ variables: { id } });
                // }
              }}
            >
              Cancelar
            </Button>{" "}
            <Mutation mutation={query}>
              {eliminarProducto => (
                <Button
                  color="danger"
                  onClick={() => {
                    //console.log(this.props.handleOpenModal(0));
                    this.props.handleOpenModal(0);
                    eliminarProducto({ variables: { id } });
                    // if (this.confirmar) {
                    //   eliminar({ variables: { id } });
                    // }
                  }}
                >
                  Confirmar
                </Button>
              )}
            </Mutation>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Aviso;
