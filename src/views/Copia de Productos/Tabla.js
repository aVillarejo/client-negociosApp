import React, { Component, Fragment } from "react";
import { Table, Badge } from "reactstrap";
import Modal from "./Modal";

import { Mutation } from "react-apollo";
import { ELIMINAR_PRODUCTO } from "../../graphql/mutations";

const styles = {
  link: {
    textDecoration: "none",
    color: "black"
  },
  finalRow: {
    display: "flex",
    justifyContent: "center",
    paddingRight: 15
  },
  buttonFont: {
    textDecoration: "none",
    color: "white",
    borderRadius: 5
  }
};

function ItemRow(props) {
  const { handleOpenModal, query, resModal } = props;
  const { id, clave, nombre, precio, stock } = props.item;
  const itemLink = `#/propductos/${id}`;
  return (
    <Fragment>
      <Modal
        isOpen={props.isOpen}
        handleOpenModal={props.handleOpenModal}
        handleResModal={props.handleResModal}
        id={id}
        query={query}
      />
      <tr key={id.toString()}>
        <td>
          <a style={styles.link} href={itemLink}>
            {clave}
          </a>
        </td>
        <td>
          <a style={styles.link} href={itemLink}>
            {nombre}
          </a>
        </td>
        <td>
          <a style={styles.link} href={itemLink}>
            {precio}
          </a>
        </td>
        <td>
          <a style={styles.link} href={itemLink}>
            {stock}
          </a>
        </td>
        <td style={styles.finalRow}>
          <a
            className="btn btn-primary mr-2"
            style={styles.buttonFont}
            href={itemLink}
          >
            <i className="fa fa-pencil-square-o fa-lg mr-1" />
            <span className="d-none d-md-inline-block"> Editar</span>
          </a>

          <button
            type="button"
            style={styles.buttonFont}
            className="btn btn-danger d-block d-md-inline-block"
            onClick={() => {
              handleOpenModal();
            }}
          >
            <i className="fa fa-trash fa-lg" />
            <span className="d-none d-md-inline-block ml-1"> Eliminar</span>
          </button>
          {/* <BtnEliminar query={props.query} id={id} /> */}
        </td>
      </tr>
    </Fragment>
  );
}

const Tabla = props => {
  const { query, handleOpenModal, source, resModal } = props;
  return (
    <div className="table-responsive-md">
      <Table
        striped
        hover
        responsive
        style={{ minHeight: 100, marginTop: 40 }}
        xs="12"
      >
        <thead>
          <tr>
            <th>Clave</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {source.map((item, index) => (
            <ItemRow
              key={index}
              item={item}
              query={query}
              handleOpenModal={handleOpenModal}
              resModal={resModal}
              isOpen={props.isOpen}
              handleOpenModal={props.handleOpenModal}
              handleResModal={props.handleResModal}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabla;
