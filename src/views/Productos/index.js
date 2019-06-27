import React, { Component } from "react";
import Container from "@material-ui/core/Container";

export default class element extends Component {
  render() {
    return (
      <Container>
        <div className="d-flex" style={styles.Container}>
          <p>element</p>
        </div>
      </Container>
    );
  }
}

const styles = {
  Container: {
    background: "red"
    // justifyContent: "center",
    // alignItems: "center"
  }
};
