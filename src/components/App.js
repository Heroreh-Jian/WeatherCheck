import React, { Component } from 'react';
import SearchBar from "../containers/SearchBar";
import List from "../containers/list";
class App extends Component {
  render() {
    return (
      <div className="container">
      <SearchBar />
      <List />
      </div>
    );
  }
}

export default App;
