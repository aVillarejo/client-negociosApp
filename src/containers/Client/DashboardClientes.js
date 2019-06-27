import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { mainListItems, secondaryListItems } from "./listItems";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

//Views
import Dashboard from "../../views/Dashboard/";
import Clientes from "../../views/Clientes/";

import Productos2 from "../../views/Productos1/";
import EditarProducto2 from "../../views/Productos1/EditarProducto";

import Productos from "../../views/Productos/";
import EditarProducto from "../../views/Productos/EditarProducto";

import GridsPage from "../../views/Grids/";
import Test from "../../views/Test/";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ITIC's Store
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <Switch>
            <Route path="/app/dashboard" name="Dashboard" component={Dashboard} />
            <Route
              path="/app/clientes"
              exact
              name="Clientes"
              component={Clientes}
            />
            {/* <Route path="/clientes/editar/:id" exact name="Editar Cliente" component={EditarCliente} /> */}
            <Route
              path="/app/2productos"
              exact
              name="Productos"
              component={Productos2}
            />
            {/* <Route exact path="/productos/nuevo" component={NuevoProducto} /> */}
            <Route
              path="/app/2productos/editar/:id"
              exact
              component={EditarProducto2}
            />

            <Route path="/app/productos" name="Productos" component={Productos} />
            <Route
              path="/app/productos/editar/:id"
              exact
              component={EditarProducto}
            />
            <Route path="/app/grids" component={GridsPage} />
            <Route path="/app/test" component={Test} />

            {/* <Route path="/admin/grids"  name="Grids" component={GridsPage} /> */}

            <Redirect from="/app" to="/app/dashboard" />
          </Switch>
        </Container>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
