import "./polyfill";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Styles
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";

//Apollo Client
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

// Containers
import Full from "./containers/Full/";
import Dash from "./containers/Client/DashboardClientes";

// Views
import Login from "./views/Pages/Login/";
import Register from "./views/Pages/Register/";
import Page404 from "./views/Pages/Page404/";
import Page500 from "./views/Pages/Page500/";

//Client for Apollo Server

const APOLLO_CLIENT = new ApolloClient({
  //uri: "https://crm-server-test.herokuapp.com/graphql",
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphqlErrors }) => {
    console.log("GraphQL Errors: ", graphqlErrors);
    console.log("Network Errors: ", networkError);
  }
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={APOLLO_CLIENT}>
        <HashRouter>
          <Switch>
            <Route exact path="/" name="Login Page" component={Login} />
            <Route exact path="/registro" name="Register Page" component={Register}/>
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            {/* <Route path="/app" name="App" component={Dash} /> */}
            <Route path="/admin" name="Admin" component={Full} />
          </Switch>
        </HashRouter>
      </ApolloProvider>
    );
  }
}
