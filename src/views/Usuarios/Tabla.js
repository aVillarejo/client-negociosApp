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
  const { id } = item;
  const itemLink = `#/clientes/${item.id}`;
  return (
    <tr key={item.id.toString()}>
      <td>
        <a style={styles.link} href={itemLink}>
          {item.nombre} {item.apellido}
        </a>
      </td>
      <td>
        <a style={styles.link} href={itemLink}>
          {item.usuario}
        </a>
      </td>
      <td>
        <a style={styles.link} href={itemLink}>
          {item.telefono}
        </a>
      </td>
      {/* <td>
        {item.tipo === "PREMIUM" ? (
          <Badge color="dark" pill={true}>
            PREMIUM
          </Badge>
        ) : (
          <Badge color="light" pill={true}>
            BASICO
          </Badge>
        )}
      </td> */}

      <td style={styles.finalRow}>
        {/* <a
          className="btn btn-primary mr-2"
          style={styles.buttonFont}
          href={itemLink}
        >
          <i className="fa fa-pencil-square-o fa-lg mr-1" />
          <span className="d-none d-md-inline-block"> Editar</span>
        </a> */}

        <BtnEliminar query={props.query} id={id} />
      </td>
    </tr>
  );
}

const Tabla = props => {
  const { query } = props;
  return (
    <div className="table-responsive-md">
      <Table hover style={{ minHeight: 100, marginTop: 20 }} xs="12">
        <thead>
          <tr>
            <th>
              <strong>Nombre</strong>
            </th>
            <th>
              <strong>Usuario</strong>
            </th>
            <th>
              <strong>Telefono</strong>
            </th>
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
