import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends Component {
  state = {
    headerText: "Name it!",
    headerExpanded: true,
    suggestedName: [],
  };

  handelInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedName: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handelInputChange} />
        <ResultContainer suggestedName={this.state.suggestedName} />
      </div>
    );
  }
}

export default App;
