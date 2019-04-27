import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Mutation } from "react-apollo";

const styles = {
  link: {
    textDecoration: "none",
    color: "black"
  },
  finalRow: {
    display: "flex",
    flex: -1,
    justifyContent: "center",
    paddingRight: 15
  },
  buttonFont: {
    textDecoration: "none",
    color: "white",
    borderRadius: 5
  }
};

class BtnEliminar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false
    };

    this.toggle = this.toggle.bind(this);
    this.confirmar = this.confirmar.bind(this);
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
  confirmar() {
    this.setState({
      modal: !this.state.modal
    });
    return 1;
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
      <Mutation mutation={query}>
        {eliminar => (
          <div className="animated fadeIn">
            {/* <Button onClick={this.toggle}>Launch demo modal</Button> */}
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Aviso</ModalHeader>
              <ModalBody>¿Realmente desea eliminar el registro?.</ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    this.confirmar;
                    if (this.confirmar) {
                      eliminar({ variables: { id } });
                    }
                  }}
                >
                  Confirmar
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>

            <button
              type="button"
              style={styles.buttonFont}
              className="btn btn-danger d-block d-md-inline-block"
              onClick={this.toggle}
            >
              <i className="fa fa-trash fa-lg" />
              <span className="d-none d-md-inline-block ml-1"> Eliminar</span>
            </button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default BtnEliminar;
