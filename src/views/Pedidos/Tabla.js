import React, { Component } from "react";
import {
  Table,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import BtnEliminar from "./Modal";

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
  const item = props.item;
  const { id,clave,nombre,precio,stock } = item;
  const itemLink = `#/propductos/${item.id}`;
  return (
    <tr key={item.id.toString()}>
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

        <BtnEliminar query={props.query} id={id} />
      </td>
    </tr>
  );
}

const Tabla = props => {
  const { query } = props;
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
          {props.source.map((item, index) => (
            <ItemRow key={index} item={item} query={query} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabla;
