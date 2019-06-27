import gql from "graphql-tag";

export const NUEVO_CLIENTE = gql`
  mutation crearCliente($input: ClienteInput) {
    addCliente(input: $input) {
      id
      nombre
      apellido
    }
  }
`;

export const ACTUALIZAR_CLIENTE = gql`
  mutation actualizarCliente($input: ClienteInput) {
    modCliente(input: $input) {
      id
      nombre
      apellido
      empresa
      emails {
        email
      }
      tipo
      edad
    }
  }
`;

export const ELIMINAR_USUARIO = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const ADD_PRODUCTO = gql`
  mutation addProducto($input:ProductoInput!){
  addProducto(input:$input){
    id
    clave
    descripcion
    marca
    so
    memoria
    stock
    precio
    costo
    url
  }
}
`;

export const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($input: ProductoInput) {
    modProducto(input: $input) {
      id
      nombre
      precio
      stock
    }
  }
`;

export const ELIMINAR_PRODUCTO = gql`
  mutation eliminarProducto($id: ID!) {
    delProducto(id: $id)
  }
`;
