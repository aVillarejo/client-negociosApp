import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Mutation } from "react-apollo";

const ModalEliminar = props => {
  const modal = props.isOpen ? props.isOpen : false;
  const  body = props.body ? props.body : "¿Realmente desea eliminar el registro?.";
  const {handleOpenModal, handleResModal,className,query} = props 
  return (
    <div className="animated fadeIn">
      <Modal
        isOpen={modal}
        toggle={handleOpenModal}
        className={className}
      >
        <ModalHeader toggle={handleOpenModal}>Aviso</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Mutation mutation={query}>
            {fun => (
              <Button
                color="primary"
                onClick={() => {
                  handleResModal(fun);
                  handleOpenModal();
                }}
              >
                Confirmar
              </Button>
            )}
          </Mutation>
          <Button color="secondary" onClick={() => handleOpenModal()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalEliminar;