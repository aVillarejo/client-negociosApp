export default {
  items: [
    {
      name: "Panel de Control",
      url: "/dashboard",
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
      url: "/clientes",
      icon: "icon-people"
    },
    {
      name: "Productos",
      url: "/2productos",
      icon: "icon-notebook"
    },
    {
      name: "Pedidos",
      url: "/pedidos",
      icon: "fa-money fa"
    },
    {
      name: "Grids",
      url: "/grids",
      icon: "fa fa-suitcase"
    },
    {
      name: `Reportes`,
      url: "/reportes",
      icon: "fa fa-line-chart"
    },
    {
      name: "Productos",
      url: "/productos",
      icon: "icon-notebook"
    },
  ]
};
