import React, { Fragment } from "react";
import { Table, Badge } from "reactstrap";
import { Link } from "react-router-dom";
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
  const { handleResModal, eliminar, handleOpenModal } = props;
  const { id, clave, descripcion, precio, stock } = props.item;
  const itemLink = `#/propductos/${id}`;
  return (
    <tr key={id.toString()}>
      <td>
        <a style={styles.link} href={itemLink}>
          {clave}
        </a>
      </td>
      <td>
        <a style={styles.link} href={itemLink}>
          {descripcion}
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
        <Link
          className="btn btn-primary mr-2"
          style={styles.buttonFont}
          to={`/admin/productos/editar/${id}`}


        >
          <i className="fa fa-pencil-square-o fa-lg mr-1" />
          <span className="d-none d-md-inline-block"> Editar</span>
        </Link>
        <button
          type="button"
          style={styles.buttonFont}
          className="btn btn-danger d-block d-md-inline-block"
          onClick={() => {
            console.log("Habre modal, id: ", id);
            props.handleOpenModal(id);
          }}
        >
          <i className="fa fa-trash fa-lg" />
          <span className="d-none d-md-inline-block ml-1"> Eliminar</span>
        </button>
      </td>
    </tr>
  );
}

const Tabla = props => {
  const { source, handleResModal, handleOpenModal } = props;
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
              handleResModal={handleResModal}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabla;
