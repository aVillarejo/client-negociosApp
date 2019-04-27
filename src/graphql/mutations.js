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

export const ELIMINAR_CLIENTE = gql`
  mutation eliminarCliente($id: ID!) {
    delCliente(id: $id)
  }
`;

export const NUEVO_PRODUCTO = gql`
  mutation nuevoProducto($input: ProductoInput) {
    nuevoProducto(input: $input) {
      id
      nombre
      precio
      stock
    }
  }
`;

export const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($input: ProductoInput) {
    actualizarProducto(input: $input) {
      id
      nombre
      precio
      stock
    }
  }
`;

export const ELIMINAR_PRODUCTO = gql`
  mutation eliminarProducto($id: ID!) {
    eliminarProducto(id: $id)
  }
`;
