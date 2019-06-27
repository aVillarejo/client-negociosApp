export default {
  items: [
    {
      name: "Panel de Control",
      url: "/admin/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: ""
      }
    },
    {
      title: true,
      name: "Catalogos",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Clientes",
      url: "/admin/clientes",
      icon: "icon-people"
    },
    {
      name: "Usuarios",
      url: "/admin/usuarios",
      icon: "fa fa-suitcase"
    },
    {
      name: "Productos",
      url: "/admin/productos",
      icon: "icon-notebook"
    },
    {
      name: "Ventas",
      url: "/admin/ventas",
      icon: "fa-money fa"
    },
    // {
    //   name: "Grids",
    //   url: "/admin/grids",
    //   icon: "fa fa-suitcase"
    // },
    // {
    //   name: `Reportes`,
    //   url: "/admin/reportes",
    //   icon: "fa fa-line-chart"
    // },
    
  ]
};
