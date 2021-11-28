import React, { Component } from 'react';
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import data from '../data.json';

class App extends Component {
  state = {

  }

  render() {
    // const { step } = this.props;

    return (
      <>
        <Header data={data.header}/>
        <Home data={data.home}/>
      </>
    );
  }
};

export default App;