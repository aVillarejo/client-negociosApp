import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { ADD_PRODUCTO } from "../../graphql/mutations";



export default class NuevoProducto extends Component {
  state = {
    "clave" : "",
    "descripcion" : "",
    "marca" : "",
    "so" : "",
    "memoria" : "",
    "stock" : 0,
    "precio" : 0,
    "costo" : 0,
    "url" : ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validarForm = () => {
    const { clave, precio, stock } = this.state;
    const noValido = !clave || !precio || !stock;

    return noValido;
  };

  crearProducto = (e, nuevoProducto) => {
    e.preventDefault();
    //Insertando en la bd
    nuevoProducto().then(data => {
      console.log(data);
    });
  };

  render() {
    const { 
      clave,
      descripcion,
      marca,
      so,
      memoria,
      stock,
      precio,
      costo,
      url
    } = this.state;

    const input = {
      clave,
      descripcion,
      marca,
      so,
      memoria,
      stock,
      precio,
      url,
      costo:Number(costo),
      precio: Number(precio),
      stock: Number(stock)
    };
    return (
      <Fragment>
        <h2 className="text-center mb-5">Nuevo Producto</h2>
        <div className="row justify-content-center">
          <Mutation mutation={ADD_PRODUCTO} variables={{ input }} onCompleted={() => this.props.history.push('/admin/productos')}>
            {(nuevoProducto, { loading, data, error }) => (
              <form
                className="col-md-8"
                onSubmit={e => this.crearProducto(e, nuevoProducto)}
              >
                <div className="form-group">
                  <label>Clave:</label>
                  <input
                    type="text"
                    name="clave"
                    className="form-control"
                    placeholder="Clave del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Descripcion:</label>
                  <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Descripcion del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Marca:</label>
                  <input
                    type="text"
                    name="marca"
                    className="form-control"
                    placeholder="Marca del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>SO:</label>
                  <input
                    type="text"
                    name="so"
                    className="form-control"
                    placeholder="Sistema Operativo del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Memoria:</label>
                  <input
                    type="text"
                    name="memoria"
                    className="form-control"
                    placeholder="Memoria del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Precio:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">$</div>
                    </div>
                    <input
                      type="number"
                      name="precio"
                      className="form-control"
                      placeholder="Precio de Adquisición del Producto"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Costo:</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">$</div>
                    </div>
                    <input
                      type="number"
                      name="costo"
                      className="form-control"
                      placeholder="Costo del Producto a la Venta"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Stock:</label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    placeholder="stock del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Url:</label>
                  <input
                    type="text"
                    name="url"
                    className="form-control"
                    placeholder="URL de imagen del Producto"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success float-right"
                  disabled={this.validarForm()}
                >
                  Crear Producto
                </button>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}
