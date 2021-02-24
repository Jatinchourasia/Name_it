import React, { Component, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerText, setHeaderText] = useState("Name It!");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedName, setSuggestedName] = useState([]);

  const handelInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedName(inputText ? name(inputText) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headTitle={headerText} />
      <SearchBox onInputChange={handelInputChange} />
      <ResultContainer suggestedName={suggestedName} />
    </div>
  );
};

// class App extends Component {
//   state = {
//     headerText: "Name it!",
//     headerExpanded: true,
//     suggestedName: [],
//   };

//   handelInputChange = (inputText) => {
//     this.setState({
//       headerExpanded: !inputText,
//       suggestedName: inputText ? name(inputText) : [],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Header
//           headerExpanded={this.state.headerExpanded}
//           headTitle={this.state.headerText}
//         />
//         <SearchBox onInputChange={this.handelInputChange} />
//         <ResultContainer suggestedName={this.state.suggestedName} />
//       </div>
//     );
//   }
// }

export default App;
