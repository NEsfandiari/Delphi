import React, { Component } from "react";
import Styled from "styled-components";

var graphql = require("graphql.js");
var graph = graphql("http://localhost:8989/graphql");

const Container = Styled.div`
  
`;

class App extends Component {
  async componentDidMount() {
    const data = await graph.query`
    {
      allTopics {
        txid
        transactions {
          type
          status
        }
      }
    }
    `;
    console.log(data);
  }

  render() {
    return (
      <Container>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    );
  }
}

export default App;
